const express=require("express");
const dotenv=require('dotenv');
dotenv.config();
const port=process.env.PORT_NUMBER||5000
const dummyNotes=require("./models/notes.js");
const mynotebookServer=express();
mynotebookServer.get('/',(req,res)=>{
       res.json({message:"hello from server get route"})
})
mynotebookServer.get('/api/notes',(req,res)=>{
      res.json(dummyNotes)
})
mynotebookServer.get('/api/notes/:id',(req,res)=>{
       const note=dummyNotes.find((n)=>n._id==req.params.id)
       try {
              if(note){
                     res.json(note)    
              }
              else{
                     res.send('sahi id daal madrchod')
              }
              
       } catch (error) {
          res.status(400).send('server ka gaand maragya');    
       }
      
})
mynotebookServer.post('/',(req,res)=>{
       res.json({message:"hello from server post route"})
})
mynotebookServer.put('/',(req,res)=>{
       res.json({message:"hello from server put route"})
})
mynotebookServer.delete('/',(req,res)=>{
       res.json({message:"hello from server delete route"})
})
mynotebookServer.listen(port,()=>{
       console.log(`server is listining on  port ${port}`);
})