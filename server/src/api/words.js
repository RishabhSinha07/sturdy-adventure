const {Router} = require('express');

const router = Router();

const wordValue = require('../models/wordsValue');
const wordType = require('../models/wordType');


router.get('/getWordType', async (req,res,next) => {
    try {
        const data = await wordType.find();
        res.json(data);
    } catch (error) {
        next(error);
    }
});

router.get('/getWord', async (req,res,next) => {
    try {
        const data = await wordValue.find();
        res.json(data);
    } catch (error) {
        next(error);
    }
});


router.post('/addWordType', async (req,res,next) => {
    try {
        const word_type = new wordType(req.body);
        console.log(word_type);
        const created_entry = await word_type.save();
        res.json(req.body);
    } catch (error) {
        next(error);
    }
});

router.post('/addWord', async (req,res,next) => {
    try {
        const word_value = new wordValue(req.body);
        const created_entry = await word_value.save();
        res.json(req.body);
    } catch (error) {
        next(error);
    }
});




module.exports = router;

