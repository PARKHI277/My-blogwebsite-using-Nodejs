const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

const homec = "ncjkn sncn kjnxjn jkqnxjnj jxjhaqxhjn hxnhxbhxh xhb";
const aboutc = "ncjkn sncn kjnxjn jkqnxjnj jxjhaqxhjn hxnhxbhxh xhb";
const contactc = "ncjkn sncn kjnxjn jkqnxjnj jxjhaqxhjn hxnhxbhxh xhb"; 

app.get("/",function(req,res)
{
     res.render("home",{deliver:homec});
});

app.listen(3000,function()
{
    console.log("Server started on port 3000");
})