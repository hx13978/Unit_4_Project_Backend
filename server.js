const express = require('express');
const app = express();
app.use(express.json());

//////MIDDLEWARE ENDS

//HOME
app.get('/', (req, res) => {
    res.json('express api is working')
});

app.use("/activities", require("./controllers/listController.js"));

app.listen(process.env.PORT, () => {
    console.log('Nodemon is listening');
})