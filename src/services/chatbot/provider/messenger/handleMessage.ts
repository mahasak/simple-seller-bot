import {getPageInfo , sendMessage} from './api'

export const handleMessage = async (sender_psid: any, received_message: any) => {
  let response;
  
  if (received_message.is_echo) {
      console.log(`Received echo for message ${received_message.id} and app ${received_message.app_id} with metadata ${received_message.metadata}`);
      return;
  } else {
      console.log(received_message);
  }

  if (received_message.text) {
      response = {
          "text": `You sent the message: "${received_message.text}". Now send me an image!`
      }
  }
  
  sendMessage(sender_psid, response);
}