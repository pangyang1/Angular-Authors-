const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 8888;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './public/dist/')));

// mongo connection and modules

mongoose.connect('mongodb://localhost/movies');
mongoose.Promise = global.Promise;

const MovieSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Movie name is required!'], minlength: [3, 'Movie name must be at least 3 characters']}
}, {timestamps: true});

mongoose.model('Movie', MovieSchema);
const Movie = mongoose.model('Movie');

//----------------------- Movie routes--------------------------------

// index - show all - get
app.get('/movies', (req, res) =>{
    Movie.find({}, (err, movies)=>{
        if(err) {
            res.send(err);
    } else {
        res.json(movie);
    }

    })
})

//create - create movies - post
app.post('/movies',(req, res)=>{
    console.log(req.body);
    Movie.create(req.body, (err, movie)=>{
        if(err){
            res.send(err);
        } else {
            res.json(movie);
        }
    })
})
//show - show one movies - get
app.get('/movies/:id', (req, res)=>{
    const movie_id = req.params.id;
    Movie.findOne({_id: movie_id}, (err, movie)=>{
        if(err){
            res.send(false);
        } else {
            res.json(movie);
        }
    })
})
//update - update movies - put
app.put('/movie/:id', (req, res)=>{
    const movie_id = req.params.id;
    Movie.findByIdAndUpdate(movie_id, req.body, (err, response)=>{
        if(err){
            res.send(err);
        } else {
            res.send(true);
        }
    })
})
//delete - delete movies - delete
app.delete('/movies/:id', (req, res)=>{
    Movie.deleteOne({_id: req.params.id}, (err)=>{
        if(err){
            res.send(err);
        } else {
            res.send(true);
        }
    })
})

app.all('*', (req, res, next)=>{
    res.sendFile(path.resolve('./public/dist/index.html'));
})


app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
})
