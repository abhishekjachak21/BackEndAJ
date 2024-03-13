import {app} from "./app.js"
import connectDB from './DB/index.js';
import dotenv from 'dotenv';

dotenv.config({ path: './env' });

console.log("MongoDB URL:", process.env.MONGODB_URL); // Add this line to log the MongoDB URL

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
