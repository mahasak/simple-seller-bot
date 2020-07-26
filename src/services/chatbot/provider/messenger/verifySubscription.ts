import { Request, Response } from "express";
import dotenv from "dotenv";
import { setupBotMenu } from "./setupBotMenu"

dotenv.config();

export const verifySubscription = async (req: Request, res: Response) => {
    if (req.query['hub.mode'] === 'subscribe' &&
        // TODO : Add logging here
        req.query['hub.verify_token'] === process.env.FB_WEBHOOK_VERIFY_TOKEN) {
        console.log("Validating webhook");
        setupBotMenu();
        res.status(200).send(req.query['hub.challenge']);
    } else {
        // TODO : Add logging here
        console.error("Failed validation. Make sure the validation tokens match.")
        
        res.sendStatus(403);
    }
};