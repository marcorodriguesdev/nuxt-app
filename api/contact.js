import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    console.log(body);


    // Send data to email via nodemailer
    
    return {
      body,
    };
  } catch (err) {
    console.log(err);
  }
});
