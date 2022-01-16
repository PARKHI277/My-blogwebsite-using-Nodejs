const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const lodash = require("lodash");

const app = express();
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

let posts = [];

const homec = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam reiciendis asperiores, dolore est nam in debitis inventore eaque explicabo quod saepe maxime quaerat voluptas ab pariatur sint. Pariatur, nam.";
const aboutc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam reiciendis asperiores, dolore est nam in debitis inventore eaque explicabo quod saepe maxime quaerat voluptas ab pariatur sint. Pariatur, nam.";
const contactc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam reiciendis asperiores, dolore est nam in debitis inventore eaque explicabo quod saepe maxime quaerat voluptas ab pariatur sint. Pariatur, nam."; 

app.get("/",function(req,res)
{
     res.render("home",{deliver:homec,
    posts:posts});
  
});

app.get("/about",function(req,res)
{
    res.render("about",{deliverabout:aboutc});
})

app.get("/contact",function(req,res)
{
    res.render("contact",{delivercontact:contactc});
})
app.get("/compose",function(req,res)
{
    res.render("compose");
})



app.post("/compose",function(req,res)
{
    
    const post  = {
        title: req.body.createpost,
        content: req.body.main
    };

    posts.push(post);

    res.redirect("/");
    
})

app.get("/posts/:postName",function(req,res)
{
   const requestedTitle = lodash.lowerCase(req.params.postName);
   posts.forEach(function(post)
   {
       const storedTitle = lodash.lowerCase(post.title);
       if(storedTitle === requestedTitle)
       {
           res.render("post",{
               title:post.title,
               content:post.content
           });
       }
   })
});

app.listen(3000,function()
{
    console.log("Server started on port 3000");
})