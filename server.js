const express=require("express");
const cors=require("cors");

const {think}=require("./brain");


const app=express();


app.use(cors());

app.use(express.json());



app.post("/ask",async(req,res)=>{


let question=req.body.question;


let answer=await think(question);



res.json({

answer:answer

});


});



app.listen(3000,()=>{

console.log(
"MiniAI server running on port 3000"
);

});
