const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const lodash = require("lodash");

const app = express();
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

let posts = [];

const homec = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because "
const aboutc = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam reiciendis asperiores, dolore est nam in debitis inventore eaque explicabo quod saepe maxime quaerat voluptas ab pariatur sint. Pariatur, nam.";
const contactc = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores"
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