const server=require('./server.js');


server.get('/profile',(req,res)=>
{
   res.sendFile(__dirname +'/silvia.html');               
});


server.listen(3000,()=>{
   console.log('localhost listening in port 3000')              
})
