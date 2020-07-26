import { Request, Response } from "express";
import { handleMessage } from "./handleMessage";
import { handlePageMessage } from "./handlePageMessage";
import { EventEmitter } from "events";

export const processRequest = async (req: Request, res: Response) => {
    const data = req.body;
    console.log("process request");

    if (data.object == 'page') {
        data.entry.forEach((entry: any) => {
            const pageID = entry.id;
            const timeOfEvent = entry.time;
            entry.messaging.forEach((event: any) => {
                let sender_psid = event.sender.id;
                console.log('Sender PSID: ' + sender_psid);
                console.log(event);
                if (sender_psid === "2199911393591385") {
                    handlePageMessage( event.recipient.id, event.message);
                } else if (event.message) {
                    handleMessage(sender_psid, event.message);
                }
            })
        });
        res.status(200).send('EVENT_RECEIVED');
    } else {
        res.sendStatus(404);
    }
}
