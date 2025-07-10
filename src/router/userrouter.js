// userrouter.js

import express from "express";
import userController from "../controller/usercontroller.js"; // ✅ सही relative path

const router = express.Router(); // ✅ सही तरीका

router.get("/", userController); // ✅ रूट और कंट्रोलर

export default router;
