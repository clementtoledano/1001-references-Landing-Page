// pages/api/subscribe.js

import { NextApiRequest, NextApiResponse } from "next";
import btoa from "btoa";

const { MAILCHIMP_DC, MAILCHIMP_LIST_ID, MAILCHIMP_API_KEY } = process.env;

if (!MAILCHIMP_DC) throw new Error("Error: `MAILCHIMP_DC` is required");
if (!MAILCHIMP_LIST_ID)
  throw new Error("Error: `MAILCHIMP_LIST_ID` is required");
if (!MAILCHIMP_API_KEY)
  throw new Error("Error: `MAILCHIMP_API_KEY` is required");

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.body["b_3951c19vtqb9xa0we_9rv293"]) {
      return res.redirect("/#subscribed");
    }

    const { email } = req.query;
    const url = `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/`;

    await fetch(url, {
      mode: "no-cors",

      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });

    return res.redirect("/#subscribed");
  } catch (error) {
    console.error("Error subscribing:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while subscribing." });
  }
}
