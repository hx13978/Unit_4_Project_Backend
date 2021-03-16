require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
//////MIDDLEWARE ENDS

//HOME
app.get('/', (req, res) => {
    res.json({ message: "express api app is working" });
});

app.use("/activities", require("./controllers/listController.js"));

app.listen(process.env.PORT, () => {
    console.log('Nodemon is listening');
})