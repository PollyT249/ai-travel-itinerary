function displayItinerary(response) {
  console.log("Itinerary generated");
  new Typewriter("#itinerary", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateItinerary(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#input-instructions");
  let apiKey = "20ao53abceat410d7090d5fb4a77c102";
  let prompt = `Write a 4-day travel itinerary for ${instructionsInput.value}. List popular sights and a short daily plan, max 15 lines. Add up to 10 emojis total. Include estimated cost for each day in euros and total cost. Respond only in plain HTML, no markdown, no formatting symbols like asterisks, backticks, or hashtags. Use plain text symbols like & instead of escaped HTML entities such as &. Do not escape characters like &, <, or > unless necessary to avoid breaking tags. No extra explanations, just clean HTML output in a list style.`;
  let context =
    "You are a travel specialist and know the best tourist spots around the world.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiURL).then(displayItinerary);

  console.log("Generating itinerary");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
}

let itineraryFormElement = document.querySelector("#itinerary-generator-form");
itineraryFormElement.addEventListener("submit", generateItinerary);

// Write a 4-day travel itinerary for ${instructionsInput.value}. List popular sights and a short daily plan, max 15 lines. Add up to 10 emojis total. Include estimated daily cost in euros and total cost. Respond only in plain HTML, no markdown, no formatting symbols like asterisks, dashes, backticks, or hashtags. No extra explanations, just clean HTML output.

// Generate a travel itinerary for the place given by user ${instructionsInput.value} for 4 days. Provide popular sights, keep it short and well-formatted, in less than 15 lines, separate and start each day with a new line, add some emojis (not more than 10). Add an estimated price for each day in euros, and include total amount of money for all days. Please give me a short response in HTML format only, without actually including word "html". Do not use markdown, special symbols, or code formatting. Remove all formatting like asterisks, dashes, backticks, and hash symbols.
