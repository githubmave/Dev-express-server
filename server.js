const express=require('express');

const server=express();

server.get('/compliment',(req,res)=>
{
   res.send('<h>you did a good job</h>');               
});


server.listen(3000,()=>{
   console.log('localhost listening in port 3000')              
})

module.exports=server;
