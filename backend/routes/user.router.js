import express from "express";
import { getUserProfileAndRepos } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
// TODO => Get likes (which/who liked our profile)
// TODO => POST like a profile



export default router;