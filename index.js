const server=require('./server.js');


server.get('/profile',(req,res)=>
{
   res.sendFile(__dirname +'/silvia.html');               
});


server.get('/trouts/:trout', (req, res) => {
    console.log(req.params)

    switch(req.params.name) {
        case 'one':
            return res.sendFile(__dirname + '/sampson.html')

       

        default:
            res.sendFile(__dirname + '/silvia.html')
    }



server.listen(3000,()=>{
   console.log('localhost listening in port 3000')              
})
