/**
 * @fileoverview This is a simple Node.js API that makes a call to the Bard API.
 * @author @greenido
 * @update 2019-01-28
 * @version 0.1
 
 */
const express = require("express");
const cors = require("cors");
require('dotenv').config()
//console.log(process.env.BARD_API_KEY);

const app = express();
app.options("*", cors());

//
//
//
app.get("/", cors(), async (req, res) => {
  res.set("Content-Type", "text/html");

  // Make an API call to Bard
  const request = await fetch("https://api.bardapi.dev/chat", {
    headers: {
      Authorization: "Bearer " + process.env.BARD_API_KEY,
    },
    method: "POST",
    body: JSON.stringify({ input: req.query.q }) // Send the user's input to Bard
  });

  const response = await request.json();
  if (response.error) {
    console.log(response.error);
    res.send(response.error);
    return;
  }

  console.log(
    "\n=========\n\n For the idea: " + req.query.q + "\n\n===============\n"
  );
  console.log(response.output);
  res.send(response.output);
});

//
//
//
app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
