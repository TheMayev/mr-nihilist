// scripts

import {quotes} from './quotes.js'

console.log(quotes)

function randomQuote(arrayOfQuotes) {
  let randomNumber = Math.floor(Math.random() * arrayOfQuotes.length);
  return arrayOfQuotes[randomNumber];
}

document.getElementById("quote").innerHTML = randomQuote(quotes);
