import express, { Request, Response, Router } from 'express';
import FinancialRecordModel from '../schema/financial-record';

const router: Router = express.Router();

router.get("/getAllByUserID/:userId", async (req: Request, res: Response) => {
    try { 
        const userId = req.params.userId;
        const records = await FinancialRecordModel.find({ userId });

        if (!records || records.length === 0) {
            return res.status(404).send("No records found for the user");
        }

        return res.status(200).send(records);
    } catch (err) {
        return res.status(500).send({ error: "Internal Server Error", details: err });
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const newRecord = new FinancialRecordModel(req.body);
        const savedRecord = await newRecord.save();

        return res.status(201).send(savedRecord);
    } catch (err) {
        console.error("Error creating record:", err);
        return res.status(500).send({ error: "Failed to create record", details: err });
    }
});

router.put("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedRecord = await FinancialRecordModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedRecord) {
            return res.status(404).send({ error: "Record not found" });
        }

        return res.status(200).send(updatedRecord);
    } catch (err) {
        return res.status(500).send({ error: "Failed to update record", details: err });
    }
});

router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedRecord = await FinancialRecordModel.findByIdAndDelete(id);

        if (!deletedRecord) {
            return res.status(404).send({ error: "Record not found" });
        }

        return res.status(200).send(deletedRecord);
    } catch (err) {
        return res.status(500).send({ error: "Failed to delete record", details: err });
    }
});

export default router;
