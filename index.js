const express=require("express") //Faire appel au Package d'expressJs
const app=express() 

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello from server"})
})

app.post('/',(req,res)=>{
    res.send('You can post here everything you want')
})

const port=3000
app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})
