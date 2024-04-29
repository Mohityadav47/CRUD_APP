//programing language nahi haui 

//technology 
//framework 
//library
///___> ye hai ek runtime invirnment
//js k paass vo functionality nahi hai jisse bakend nahi banta hai
//ggl chrome ka w8 engine ka code open source hai and uuse ryan dahl ne kuch chhedkhani kari firrr 
//chorme ka v8 ka code hai vo c++ me hai lekin vo ek rapper lkaga ke js ka acoceee kar tat hjon~
// ///
// const fs = require('fs');
// fs.appendFile("hey.text","hey  holo akise jo badiya hu bhai ,",  function(err){
//     if (err) console.error(err);
//     else console.log("done");

// })
const express = require('express')
const app = express();
const path = require('path');
const fs = require('fs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');



app.get('/', function (req, res) {
  fs.readdir( `./files`,function(err,files){
    res.render("index", {files:files});
  });


  app.get('/file/:filename', function (req, res) {
 fs.readFile('./file/${(req.params.filesname}',"utf-8",function(err,filedata){
  res.render('show', {filename:req.params.filename, filedata: filedata});

 }) 
  
  });
  app.get('/file/:filename', function (req, res) {
   res.render('edit', {filename:req.params.filename});

     
     });
  app.post('/edit', function (req, res) {
   fs.rename(`./files/${rq.body.previous}`, `./files/${req.body.new}` ,function(err){


    res.redirect("/");

   });
     
     });





  app.post('/create', function (req, res) {
fs.writeFileSync(`./files/${req.body.title.split('').join('')}.txt`,req.body.details, function(err){
res.redirect("/")
});
    });

  });

  app.get('/profile/:user', function (req, res) {
   
  
    res.send( req.params.user);
  });
app.listen(3000)

