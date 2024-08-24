const express = require("express");
const app = express();
const port = 8080;
const session = require("express-session")
const flash = require("connect-flash")
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const sessionOptions ={
    secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}

app.use(session(sessionOptions))
app.use(flash());

app.get("/register",(req,res)=>{
    let {name= "somil"}= req.query;
    req.session.name = name;
    req.flash("succes","your crush")
res.redirect("/hello");
})
app.get("/hello",(req,res)=>{
    res.render("indexx.ejs",{name: req.session.name,msg:req.flash("succes")})
})
app.listen(port,()=>{
    console.log("app was listenning");
})