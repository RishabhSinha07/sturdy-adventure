const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const http = require('http');

const words = require('./api/words');
const socket_server = require('./server')

require('dotenv').config();

const middlewares = require('./middleware');

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

app.use(morgan('common'));
app.use(helmet());
app.use(cors({origin: process.env.CORS_ORIGIN}));
app.use(express.json());

app.use('/api/words', words);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const httpServer = http.Server(app);
socket_server.init(httpServer);

const port = process.env.PORT || 1337;
httpServer.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
