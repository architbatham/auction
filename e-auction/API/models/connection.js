import mongoose from 'mongoose';
const url="mongodb://localhost:27017/Archit";//npm run dev app.js
mongoose.connect(url);
console.log("Successfully connected to mongodb database...");
