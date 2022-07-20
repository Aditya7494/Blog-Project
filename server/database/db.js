import mongoose from 'mongoose';



 const Connection = async (username, password) => {

    try{

    const URL = `mongodb+srv://${username}:${password}@blog-app.9faug.mongodb.net/?retryWrites=true&w=majority`;
    
    
      
    await  mongoose.connect(URL,{useNewUrlParser:true});
    console.log('database connected successfully');
    }
    catch(error){
        console.log('error while connecting to mongodb', error);
    }

}

export default Connection;