import express from "express";
const app= express();

//middlewares
app.use(express.json());

//connections and listeners
app.post("/hello", (req, res, next)=>{
    console.log(req.body.name)
    return res.send("hellow")
})
app.listen(5000, ()=>console.log("Server Open"));
