"use strict";

// Code your solutions in this file
function writeCards(names, event) {
  var thankYouArray = [];

  for (var i = 0; i < names.length; i++) {
    thankYouArray.push("Thank you, ".concat(names[i], ", for the wonderful surprise gift!"));
  }

  return thankYouArray;
}

function countDown(integer) {
  while (integer >= 0) {
    console.log(integer);
    integer--;
  }
}