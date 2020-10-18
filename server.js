const express=require('express');

const server=express();

server.use(express.urlencoded({extended:true}))

server.get('/compliment',(req,res)=>
{
   res.send('<h>you did a good job</h>');               
});


server.listen(3000,()=>{
   console.log('localhost listening in port 3000')              
})

module.exports=server;
