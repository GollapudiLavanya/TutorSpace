const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://lavanya_node:pljYkfR4rsO7x4ca@cluster0.vxxfkc9.mongodb.net/test")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const Collection=new mongoose.model("Collection1",LogInSchema)

module.exports=Collection

