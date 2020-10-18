const server=require('./server.js');


//server.get('/profile',(req,res)=>
//{
  // res.sendFile(__dirname +'/silvia.html');               
//});


server.get('/profile/:name', (req, res) => {
    console.log(req.params)

    switch(req.params.name) {
        case 'silvia':
            return res.sendFile(__dirname + '/silvia.html')

       case 'sampson':
            return res.sendFile(__dirname + '/sampson.html')

        default:
            res.sendFile(__dirname + '/silvia.html')
    }



server.listen(3000,()=>{
   console.log('localhost listening in port 3000')              
})
