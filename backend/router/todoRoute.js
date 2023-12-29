const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const todoData = require('../model/todoSchema')
require('../connect/config');



// GET-----------------------------


router.get('/',async (req,res)=>{
    try{
        const data = await todoData.find();
        res.status(200).send(data);
    }catch (error){
        res.status(404).send("No Data found")
    }


});


//POST------------------------

router.post("/add", async (req, res) => {
    try {
      var item = req.body;
      const Data = new todoData(item);
      const saveddata = await Data.save();
      res.status(200).send("Post Successful");
    } catch (error) {
      res.status(404).send("Error !");
    }
  });



  //Deleted Method-----------
  
  router.delete("/remove/:id",  async (req,res) => {
   
    try {
      const todoId = req.params.id;
      const data = await todoData.findByIdAndDelete(todoId);
      console.log(data)
      res.status(200).send('Deleted');
    } catch (error) {
      res.status(404).send("No data found");
    }
  });
  

module.exports = router;