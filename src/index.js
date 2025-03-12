function displayItinerary(response) {
  let itineraryElement = document.querySelector("#itinerary");
  itineraryElement.innerHTML = response.data.answer;
  itineraryElement.classList.add("fade-in");
}

function generateItinerary(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#input-instructions");
  let apiKey = "20ao53abceat410d7090d5fb4a77c102";
  let prompt = `Write a detailed 3-day travel itinerary for ${instructionsInput.value}. For each day, provide at least 4 popular sights, activities, or events, but do not include hotels or accommodation information. Use only plain HTML with unordered lists (<ul>) and list items (<li>), but do not apply any list-style (no bullets or numbers). For each day, start with a title in <h2> that includes a short description and add 1 or 2 relevant emojis. If you know the price of an activity or ticket, include it next to the item in euros; if you do not know the price, leave it blank without guessing. After each day, show an estimated total cost in euros for that day. After listing all 3 days, write the total estimated cost on a new line using a <p> tag, and make sure it appears clearly separated from the previous content. Do not use any markdown, special symbols, asterisks, backticks, hashtags, or escape characters like &amp;. Only use clean HTML tags. Do not escape &, <, > unless used in tags. Return only the final itinerary in HTML, nothing else.`;
  let context =
    "You are a travel specialist and know the best tourist spots around the world.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiURL).then(displayItinerary);

  let itineraryElement = document.querySelector("#itinerary");
  itineraryElement.classList.remove("hidden");
  itineraryElement.innerHTML = `<div class="generating">⏳ Generating an itinerary plan for ${instructionsInput.value}</div>`;
}

let itineraryFormElement = document.querySelector("#itinerary-generator-form");
itineraryFormElement.addEventListener("submit", generateItinerary);
