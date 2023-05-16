/**
 * @fileoverview This file is the entry point for the app.
 * @author @greenido
 * @update 2019-01-28
 * @version 0.1
 */
import axios from "axios";

const setupTextarea = document.getElementById("setup-textarea");
const setupInputContainer = document.getElementById("setup-input-container");
const movieBossText = document.getElementById("movie-boss-text");

//
//
//
document.getElementById("send-btn").addEventListener("click", () => {
  if (setupTextarea.value) {
    setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`;
    movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`;
  }
  fetchBotReply(setupTextarea.value);
});

//
//
//
async function fetchBotReply(query) {
  const request = await axios.get("http://localhost:3000/?q=" + encodeURIComponent(query), {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost, http://127.0.0.1',
      'Access-Control-Allow-Credentials': 'true',
    },
    });
  const response = await request.json();
  console.log(response.output);
  movieBossText.innerText = response.output;
}
