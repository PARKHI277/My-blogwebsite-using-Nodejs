const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

const homec = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam reiciendis asperiores, dolore est nam in debitis inventore eaque explicabo quod saepe maxime quaerat voluptas ab pariatur sint. Pariatur, nam.";
const aboutc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam reiciendis asperiores, dolore est nam in debitis inventore eaque explicabo quod saepe maxime quaerat voluptas ab pariatur sint. Pariatur, nam.";
const contactc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam reiciendis asperiores, dolore est nam in debitis inventore eaque explicabo quod saepe maxime quaerat voluptas ab pariatur sint. Pariatur, nam."; 

app.get("/",function(req,res)
{
     res.render("home",{deliver:homec});
});

app.get("/about",function(req,res)
{
    res.render("about",{deliverabout:aboutc});
})

app.get("/contact",function(req,res)
{
    res.render("contact",{delivercontact:contactc});
})

app.listen(3000,function()
{
    console.log("Server started on port 3000");
})