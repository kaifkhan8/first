const express = require('express');
const app = express
app.listener(4000,()=> {
    console.log("server is running on localhost:4000")
})