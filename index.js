const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/usersRoutes")

app.use(express.urlencoded({extended:true}));

app.use(userRouter);

app.get("/", (req,res)=>{
    res.send("Home Page")
});

app.use((req,res)=>{
    res.send("Page not Found")
})

app.listen(PORT, ()=>{
    console.log("Server is running")
});