const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jsonParser = express.json();

const userScheme = new Schema({name: String,  password: Number}, {collection: "admin"});
const User = mongoose.model("User", userScheme);
const booksScheme = new Schema({books:Array}, {collection: "books"});
const Books = mongoose.model("Books", booksScheme);
const unitsScheme = new Schema({key:Number,units:Array}, {collection: "units"});
const Units = mongoose.model("Units", unitsScheme);
const wordsScheme = new Schema({key:Number,words:Array}, {collection: "words"});
const Words = mongoose.model("Words", wordsScheme);

mongoose.connect('mongodb+srv://yuriy:Wdj_7yex6cE5cjp@cluster0-odkqs.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true})
    .then(() => {console.log('Database is connected') },
err => { console.log('Can not connect to the database' +err)});

app.use(express.static(path.join(__dirname, 'my-app/build')));


app.get("/admin/:name/:password",function(req, res){
    const userName = req.params.name;
    const userPassword = req.params.password;
    User.findOne({password:userPassword,name:userName}, function(err, user){
        if(err) return console.log(err);
        res.send(user);
    });
});

app.get("/books",function(req, res){
    Books.find({}, function(err, books){
        if(err) return console.log(err);
        res.send(books);
    });
});

app.get("/units/:key",function(req, res){
    const keyId = req.params.key
    Units.findOne({key:keyId}, function(err, units){
        if(err) return console.log(err);
        res.send(units);
    });
});
app.get("/words/:key",function(req, res){
    const keyId = req.params.key
    Words.findOne({key:keyId}, function(err, words){
        if(err) return console.log(err);
        res.send(words);
    });
});
app.put("/addBook", jsonParser, function(req, res){

    if(!req.body) return res.sendStatus(400);

    const dataBase = req.body.base;
    const dataBook = req.body.book;
    const id = req.body.id;
    dataBase.push(dataBook)
    const newBook = {books:dataBase};

    Books.findOneAndUpdate({_id:id}, newBook, {new: true}, function(err, user){
        if(err) return console.log(err);
        res.send(user);
    });
});

app.post("/addUnits", jsonParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);

    const units = req.body.units;
    const key = req.body.key;
    const unit = new Units({units: units,key: key});

    unit.save(function(err){
        if(err) return console.log(err);
        res.send(unit);
    });
});

app.put("/addWords", jsonParser, function(req, res){
    if(!req.body) return res.sendStatus(400);
    const dataWord = req.body.word;
    const id = req.body.id;

    Words.findOne({key:id}, function(err, words){
        if(err) return console.log(err);
        if(words===null){
            const word = new Words({words:dataWord,key:id});
            word.save(function(err){
                if(err) return console.log(err);
                res.send(word);
            });
        }else{
            console.log(words)
            const array = dataWord.concat(words.words)
            const newWords = {words:array};
            Words.findOneAndUpdate({key:id}, newWords, {new: true}, function(err, word){
                if(err) return console.log(err);
                res.send(word);
            });
        }
    });
});



const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
