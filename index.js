import express, { json } from "express";
const app = express();
import { connect } from "mongoose";
import { config } from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import userRoute from "./routes/users.js";

config();

connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => { console.error(err); });

//middleware

app.use(json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);

app.get("/",(req,res)=>{
    res.send("Welcome to homepage");
})

app.get("/users",(req,res)=>{
    res.send("Welcome to user page");
})

app.listen(8800, () => {
    console.log("Backend server is running!");
});