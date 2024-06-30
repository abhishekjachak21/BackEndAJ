import taskModel from "../models/taskModel.js";
import userModel from "../models/userModel.js";
import { createTransport } from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();


const sendMail = (email, subject, title, description) => {
    var transporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD
        }
    });

    var mailOptions = {
        from: 'abhishekjachak22@gmail.com',
        to: email,
        subject: subject,
        html:`<h1>Task added successfully</h1><h2>Title: ${title}</h2><h3>Description: ${description}</h3>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Error: ' + error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
const addTask = async (req, res) => {
    const { title, description } = req.body; // Extracting task details from the request body
    const userId = req.user.id;  // Extracting userId from the authenticated user's request, Security: The req.body can be manipulated by the client, mhnun req.user je authenticated ahe, te use kara
    const user = await userModel.find({_id: userId});  // Fetching user details using userId
    const newTask = new taskModel({ title, description, completed: false, userId });  // Creating a new task associated with userId

    newTask.save()
        .then(() => {
            sendMail(user[0].email, "Task Added", title, description);  // Sending email notification to the user
            return res.status(200).json({ message: "Task added successfully" });  // Responding with success message
        })
        .catch((error) => {
            return res.status(500).json({ message: error.message });  // Responding with error message
        });
}

const removeTask = (req, res) => {
    const { id } = req.body;
    // console.log("id: ", id);
    taskModel.findByIdAndDelete(id)
        .then(() => res.status(200).json({ message: "Task deleted successfully" }))
        .catch((error) => res.status(501).json({ message: error.message }))
}

const getTask = (req, res) => {
    taskModel.find({ userId: req.user.id })
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(501).json({ message: error.message }))
}
export { addTask, getTask,removeTask }


/*
->Add task
- extract title, desc of task
- 


->Remove Task


->Get Task





*/
