#!/usr/bin/node
//prints the title of a Star Wars movie where the episode

const request = require('request');
const link = 'http://swapi-api.hbtn.io/api/films/';

const url = link  + parseInt(process.argv[2]);
request(url, function (error, response, body) {
  if (error) throw error;
  console.log(JSON.parse(body).title);
});
