
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
   // url : `mongodb+srv://${username}:${password}@blog-app.9faug.mongodb.net/?retryWrites=true&w=majority`,
   url : `mongodb://${username}:${password}@blog-app-shard-00-00.9faug.mongodb.net:27017,blog-app-shard-00-01.9faug.mongodb.net:27017,blog-app-shard-00-02.9faug.mongodb.net:27017/?ssl=true&replicaSet=atlas-d0bv3n-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true},
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1){
            return `${Date.now()}-blog-${file.originalname}`;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`,
        }
    }
})

export default multer({ storage })