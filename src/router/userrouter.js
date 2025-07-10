import express from "express";

import { createuser, getuser } from "../controller/usercontroller.js";

const router = express.Router(); // ✅ सही तरीका


router.post("/add", createuser);
router.get("/all", getuser);

export default router;
