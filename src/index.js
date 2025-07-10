import express from "express";
import connectDB from "./db/db.js";
import userrouter from "./router/userrouter.js";

const app = express();
app.use(express.json()); // ✅ जरूरी है JSON body के लिए

app.use("/userrouter", userrouter);

const startServer = async () => {
  await connectDB(); // ✅ पहले DB connect
  app.listen(4000, () => {
    console.log("✅ Server is running on http://localhost:4000");
  });
};

startServer(); // ✅ async function से चलाओ
