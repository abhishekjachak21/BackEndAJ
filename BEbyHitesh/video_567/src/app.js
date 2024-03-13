import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import {userRouter} from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users",userRouter)

export { app }

















// Define your routes and middleware here

// app.listen(process.env.PORT || 3000, () => {
//     console.log(`Server is running on port ${process.env.PORT || 3000}`);
// });