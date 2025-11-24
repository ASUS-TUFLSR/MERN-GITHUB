import express from "express";
import dotenv from 'dotenv';

import userRoutes from "./routes/user.router.js"


dotenv.config();

const app = express();
const PORT = 5000;


app.get("/", (req, res) => {
    res.send("Server Is Live");
});

app.use("/api/users", userRoutes)

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})