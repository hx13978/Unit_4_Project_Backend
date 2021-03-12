const express = require('express');
const router = express.Router();

const ListModel = require("../models").List;


//GET ALL ACTIVITIES
router.get("/home", async (req, res) => {
    let activities = await ListModel.findAll();
    res.json({ activities });
});



module.exports = router;