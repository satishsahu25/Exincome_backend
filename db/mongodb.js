const mongoose=require('mongoose');

require('dotenv').config();
const db=async()=>{
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to db')
    }catch(err){
        consoleg('err: ',err);
    }
}

module.exports ={db}