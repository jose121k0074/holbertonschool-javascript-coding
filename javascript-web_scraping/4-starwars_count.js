#!/usr/bin/node
// prints the number of movies where the character "Wedge Antilles" is present.
const request = require('request');
const url = process.argv[2];
request(url, function (error, response, body) {
  if (error) throw error;
  let con = 0;
  for (const film of JSON.parse(body).results) {
    for (const character of film.characters) {
      if (character.endsWith('/18/')) {
        con++;
      }
    }
  }
  console.log(con);
});
