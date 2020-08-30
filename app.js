const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use('/bootstrap-4.3.1-dist', express.static('boostrap-4.3.1-dist'));
app.use("/public",express.static("public")); 

app.listen(port, () => {
    console.log('Smash app listening at http://localhost:${port}');
})

//home page
app.get('/', function (req, res) {
    res.render('index');
})
