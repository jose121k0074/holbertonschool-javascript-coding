#!/usr/bin/node
// prints the title of a Star Wars movie where the episode
const request = require('request');
const link = 'https://swapi-api.hbtn.io/api/films/';
const url = link + parseInt(process.argv[2]);

request({ url: `${url}`, json: true }, (error, response, body) => {
  if (error) {
    console.error('Error fetching the URL:', error);
    return;
  }
  console.log(body.title);
});
