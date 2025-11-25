import express from "express"
import { explorePopularRepos } from "../controllers/explore.controller.js";

const router = express();

router.get("/repos/:language", explorePopularRepos);

export default router;