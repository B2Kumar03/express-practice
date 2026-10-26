import "dotenv/config";
import app from "./src/app";
import dbConnect from "./src/common/config/db";

const PORT=process.env.PORT;


const start=async()=>{
    //db connection 
   await dbConnect()
    app.listen(PORT,()=>{
        console.log(`Server is running at port ${PORT}`)
    })
}

start().catch((err)=>{
    console.log('Failed to start server',err)
    process.exit(1)
})