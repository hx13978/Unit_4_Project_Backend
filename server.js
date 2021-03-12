const express = require('express');
const app = express();
//const methodOverride = require('method-override');

app.use(express.static('public'));

//app.use(methodOverride('_method'));

app.use("/list", require("./controllers/listController.js"));
//////MIDDLEWARE ENDS

//HOME
app.get('/', (req, res) => {
    res.render('users/home.ejs')
});

app.listen(process.env.PORT, () => {
    console.log('Nodemon is listening');
})