/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array. An Array of various quotes for the getRandomQuote function to pull from. 
***/

var quotes = [
  {
    quote: "Live truly and forgive quickly.",
    source: "Paulo Coelho"
  },
  {
    quote: "There are some things you learn best in calm, and some in storm.",
    source: "Willa Cather",
    citation: "The Song of the Lark"
  },
  {
    quote: "Our lives are like the wind... or like sounds. We come into being, resonate with each other... Then fade away.",
    source: "Hayao Miyazaki"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon",
  },
  {
    quote: "Perhaps he is a fool or a coward but almost everybody is one or the other and most people are both.",
    source: "James Baldwin",
    year: "1956",
  }
];

/***
 * `getRandomQuote` function. First picks a random number and returns the object array associated to that number in the quotes array.
***/

function getRandomQuote() {
  let randomNumber = Math.floor( Math.random() * quotes.length );
  let randomQuote = quotes[ randomNumber ];
  return randomQuote;
};

/***
 * `printQuote` function. Calls getRandomQuote. Adds quote and source properties to HTML variable.
***/

function printQuote() {

  let getRandomObject = getRandomQuote();

  let HTML = `<p class="quote">${getRandomObject.quote}</p>` +
  `<p class="source">${getRandomObject.source}`;

/***
 * Checks for 'citation' and 'year' properties. Concatenates applicable properties to HTML variable. 
***/

  if ( getRandomObject.hasOwnProperty('citation') === true ) {

    HTML = HTML + `<span class="citation">${getRandomObject.citation}</span>`;

  }

  if ( getRandomObject.hasOwnProperty('year') === true ) {

    HTML = HTML + `<span class="year">${getRandomObject.year}</span>`;

  }

/***
 * After IF statements, adds the clossng P tag.
***/

  HTML = HTML + `</p>`;

  document.getElementById('quote-box').innerHTML = HTML;

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);