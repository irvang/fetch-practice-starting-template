const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const fruits = ['apple', 'banana', 'lemon'];

app.use('/', express.static('views'));
app.use('/js', express.static('js'))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('index');
});


app.get('/fruits', function (req, res) {

});


app.post('/fruits', function (req, res) {

});


app.delete('/fruits/:idName', function (req, res) {

});


app.put('/fruits/:idName', function (req, res) {

});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});