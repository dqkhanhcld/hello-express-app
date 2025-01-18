const express = require('express');
const app = express();
const port = 3000;

//Hiển thị màn hình 
app.get('/', (req, res) => {
    res.send('Hello Express!');
});

//Nghe ngóng 
app.listen(port, () => {
    console.log ('Server dang chay tai http://localhost:${port}');

});

//them middleware bodypaser de xu ly form
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));