const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.listen('3000',function () {
    console.log('server is up and running');
});

app.get('/',function (req,res) {
    res.sendfile(__dirname +'/bmicalculator.html');
});

app.post('/',function (req,res) {
    var result = Number(req.body.num1) + Number(req.body.num2);
    res.send('The result is '+result)
});

app.post('/bmicalculator.html',function (req,res) {
    var result = Number(req.body.weight)/Number(req.body.height);
    res.send('Your BMI is '+result);
})