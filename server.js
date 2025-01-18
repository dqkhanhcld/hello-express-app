const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// Sử dụng Morgan với định dạng 'dev' (phổ biến cho môi trường phát triển)
app.use(morgan('dev'));

//Hiển thị màn hình 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Nghe ngóng 
app.listen(3000, () => {
    console.log ('Server is listening on port 3000');

});

//them middleware bodypaser de xu ly form
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));