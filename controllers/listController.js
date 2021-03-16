const express = require('express');
const router = express.Router();

const ListModel = require("../models").List;

//GET ALL ACTIVITIES
router.get("/", async (req, res) => {
    console.log("get route")
    let activities = await ListModel.findAll();
    //console.log(ListModel)
    res.json({ activities });
});

//ADD AN ACTIVITY
router.post("/", async (req, res) => {
    let activity = await ListModel.create(req.body);
    res.json({ activity });
  });

//DELETE AN ACTIVITY
router.delete("/:id", async(req,res) => {
    await ListModel.destroy({
        where: { id: req.params.id },
    });
    res.json({
        message: `Activity with id ${req.params.id} has been deleted`,
    })
})


module.exports = router;