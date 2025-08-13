// Image Carousel Logic
const images = [
  "https://picsum.photos/500?1",
  "https://picsum.photos/500?2",
  "https://picsum.photos/500?3"
];
let current = 0;

function showImage() {
  document.querySelector('.carousel-img').src = images[current];
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage();
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage();
}

// Quiz Logic
const question = "JavaScript is a compiled language?";
const answer = false;

document.getElementById("question").textContent = question;

function checkAnswer(userAnswer) {
  const result = userAnswer === answer ? "Correct!" : "Wrong!";
  document.getElementById("result").textContent = result;
}

// API Fetch Logic (Random Joke)
function getJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").textContent = data.value;
    })
    .catch(err => {
      document.getElementById("joke").textContent = "Failed to fetch joke.";
      console.error(err);
    });
}
