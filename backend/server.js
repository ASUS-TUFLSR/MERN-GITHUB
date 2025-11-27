import express from "express";
import dotenv from 'dotenv';
import cors from "cors"
import "./passport/github.auth.js"
import passport from "passport";
import session from "express-session";
import userRoutes from "./routes/user.router.js"
import exploreRoutes from "./routes/explore.router.js"
import authRoutes from "./routes/auth.router.js"
import connectMongoDB from "./db/db.js";


dotenv.config();

const app = express();
const PORT = 5000;

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.get("/", (req, res) => {
    res.send("Server Is Live");
});

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/explore", exploreRoutes)

app.listen(PORT, () => {
     console.log(`Server running on Port ${PORT}`)
     connectMongoDB();
    })

