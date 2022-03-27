const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static('public'))

mongoose.connect('mongodb+srv://admin-abdulqadir:todolist123@todolist.ipnkg.mongodb.net/mywebsiteDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('connected to the database successfully')
    }
})

const costumerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: true
    }
});

const Costumer = mongoose.model("Costumer", costumerSchema);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', function (req, res) {
    const yourname = req.body.yourname
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    const costumer = new Costumer({
        name: yourname,
        email: email,
        subject: subject,
        message: message
    }).save(function(err, response){
        if(err){
            console.log('There was an error')
        }else{
            setTimeout(function(){
                res.redirect('/#contact' )
            }, 1000)
        }
    })
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}

app.listen(port, function (req, res) {
    console.log('server running on port 8000')
})