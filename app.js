import express from 'express';
import mongoose from 'mongoose';
import facilitatorRoutes from "./Routes/facilitatorRoutes.js";
const app = express();
const port=5001;

app.use(express.json());
app.use(facilitatorRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/facilitator");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});