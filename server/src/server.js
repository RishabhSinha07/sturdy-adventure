const { Server } = require("socket.io");

const init = (server) => {
    const io = new Server(server);
    
    console.log(`Socket connection established!`);
    
    io.on('connection', socket => {
        console.log(`New user connected : ${socket.id}`);
    })
}


module.exports = {
    init
};