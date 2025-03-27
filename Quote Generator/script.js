const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "Do what you love and you'll never work a day in your life.",
    author: "Confucius",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Courage is not the absence of fear, but the triumph over it.",
    author: "Nelson Mandela",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "We generate fears while we sit. We overcome them by action.",
    author: "Dr. Henry Link",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "If opportunity doesn’t knock, build a door.",
    author: "Milton Berle",
  },
  {
    text: "Do what is right, not what is easy nor what is popular.",
    author: "Roy T. Bennett",
  },
  {
    text: "Difficulties in life are intended to make us better, not bitter.",
    author: "Dan Reeves",
  },
  {
    text: "A journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
];

//we have created the array of elemets in the format text and author

//now  we have to create the function which will genertate random quotes
// this can be done by the random math function which will generate a random number
//based on this we can map them

function generation() {
  let ranNumber = Math.ceil(Math.random() * quotes.length - 1);
  let ranQuote = quotes[ranNumber];

  document.getElementById("quote").textContent = `"${ranQuote.text}"`;
  document.getElementById("author").textContent = `- ${ranQuote.author}`;
}

// now we will add a event listner which will listen to the button clicks
document.getElementById("new-quote").addEventListener("click", generation);

generation();
