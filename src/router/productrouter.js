// router/productrouter.js

import express from "express";
import productController from "../controller/productcontroller.js"; // ✅ सही relative path

const router = express.Router(); // ✅ Express router initialize

router.get("/", productController); // ✅ Route और Controller जोड़ा

export default router;
