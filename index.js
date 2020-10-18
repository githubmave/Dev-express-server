const server=require('./server.js');


//server.get('/profile',(req,res)=>
//{
  // res.sendFile(__dirname +'/silvia.html');               
//});

server.use(express.static('public'))


server.get('/profiles',(req,res)=>
{
   res.sendFile(__dirname +'/profiles.html');               
});

    switch(req.params.name) {


server.get('/profiles/:id,(req, res) => {
    console.log(req.params)

    switch(req.params.id) {
        case '1':
            return res.sendFile(__dirname + '/silvia.html')

       case '2':
            return res.sendFile(__dirname + '/sampson.html')

        default:
            res.sendFile(__dirname + '/profiles.html')
    }
        
        
        server.get('/profiles/:id,(req, res) => {
    console.log(req.params)

    switch(req.params.id) {
        case '1':
            return res.sendFile(__dirname + '/public/silvia.html')

       case '2':
            return res.sendFile(__dirname + '/public/sampson.html')

        default:
            res.sendFile(__dirname + '/profiles.html')
    }



server.post('/profile/:name', (req, res) => {
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
