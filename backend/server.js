import express from "express";
import dotenv from 'dotenv';
import cors from "cors"
import userRoutes from "./routes/user.router.js"
import exploreRoutes from "./routes/explore.router.js"

dotenv.config();

const app = express();
const PORT = 5000;
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server Is Live");
});

app.use("/api/users", userRoutes)
app.use("/api/explore", exploreRoutes)

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})