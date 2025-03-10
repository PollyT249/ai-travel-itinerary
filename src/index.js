function generateItinerary(event) {
  event.preventDefault();

  new Typewriter("#itinerary", {
    strings: "Day 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let itineraryFormElement = document.querySelector("#itinerary-generator-form");
itineraryFormElement.addEventListener("submit", generateItinerary);
