// Password - xHBvcOMteNC8t7Aq
import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

const mongoURI: string = "mongodb+srv://maravindh010:xHBvcOMteNC8t7Aq@personalfinancetracker.byjda.mongodb.net/";

mongoose.connect(mongoURI).then(() => console.log("CONNNECTED TO MONGODB!")).catch((err) => console.error("Failed to Connect to MongoDB:",err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server running on PORT ${port}`);

});
