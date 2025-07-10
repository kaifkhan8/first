// index.js

import data from "./data.js";
import express from 'express';

import userrouter from "./router/userrouter.js";
import productrouter from "./router/productrouter.js";  // ✅ यह लाइन ज़रूरी है

const app = express();

app.get('/', (req, res) => {
  res.send("🎉 Welcome to Express!");
});

// ✅ Routers को use() से लगाना चाहिए, get() नहीं
app.use("/userrouter", userrouter);
app.use("/productrouter", productrouter);

app.listen(4000, () => {
  console.log("✅ Server is running on http://localhost:4000");
});
