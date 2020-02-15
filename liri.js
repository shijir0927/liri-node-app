require("dotenv").config();
let moment = require("moment");
let fs = require("fs");
let axios = require("axios");
let keys = require("./keys.js");
let Spotify = require("node-spotify-api");
let spotify = new Spotify(keys.spotify);

let command = process.argv[2];
let input = process.argv.slice(3).join(" ");

function liriBot() {
  switch (command) {
    case "concert-this":
      axios
        .get(
          "https://rest.bandsintown.com/artists/" +
            input +
            "/events?app_id=codingbootcamp"
        )
        .then(function(response) {
          console.log(
            "---------------------------------------------------------------"
          );
          console.log(`The venue name is:  ${response.data[0].venue.name}`);
          console.log(
            `The venue location is: ${response.data[0].venue.city}, ${response.data[0].venue.region}, ${response.data[0].venue.country}`
          );
          console.log(
            `The date of the event is: ${moment(
              response.data[0].datetime
            ).format("MM/DD/YYYY")}`
          );
          console.log(
            "---------------------------------------------------------------"
          );

          let text = [
            `The venue name is: ${response.data[0].venue.name}`,
            `The venue location is: ${response.data[0].venue.city}, ${response.data[0].venue.region}, ${response.data[0].venue.country}`,
            `The date of the event is: ${moment(
              response.data[0].datetime
            ).format("MM/DD/YYYY")}`
          ];

          fs.appendFile("log.txt", text, function(err) {
            // If an error was experienced we will log it.
            if (err) {
              console.log(err);
            }
          });
        });
      break;

    case "spotify-this-song":
      if (process.argv.length == 3) {
        spotify.search(
          { type: "track", query: "The Sign Ace of Base" },
          function(err, data) {
            if (err) {
              return console.log("Error occurred: " + err);
            }
            console.log(
              "---------------------------------------------------------------"
            );
            console.log(
              `The name of the artist is: ${data.tracks.items[0].artists[0].name}`
            );
            console.log(
              `The name of the song is: ${data.tracks.items[0].name}`
            );
            console.log(
              `The preview link to the song is: ${data.tracks.items[0].preview_url}`
            );
            console.log(
              `The album name of this song is: ${data.tracks.items[0].album.name}`
            );
            console.log(
              "---------------------------------------------------------------"
            );

            let text = [
              `The name of the artist is: ${data.tracks.items[0].artists[0].name}`,
              `The name of the song is: ${data.tracks.items[0].name}`,
              `The preview link to the song is: ${data.tracks.items[0].preview_url}`,
              `The album name of this song is: ${data.tracks.items[0].album.name} `
            ];

            fs.appendFile("log.txt", text, function(err) {
              // If an error was experienced we will log it.
              if (err) {
                console.log(err);
              }
            });
          }
        );
      } else if (process.argv.length > 3) {
        spotify.search({ type: "track", query: input }, function(err, data) {
          if (err) {
            return console.log("Error occurred: " + err);
          }
          console.log(
            "---------------------------------------------------------------"
          );
          console.log(
            `The name of the artist is: ${data.tracks.items[0].artists[0].name}`
          );
          console.log(`The name of the song is: ${data.tracks.items[0].name}`);
          console.log(
            `The preview link to the song is: ${data.tracks.items[0].preview_url}`
          );
          console.log(
            `The album name of this song is: ${data.tracks.items[0].album.name}`
          );
          console.log(
            "---------------------------------------------------------------"
          );

          let text = [
            `The name of the artist is: ${data.tracks.items[0].artists[0].name}`,
            `The name of the song is: ${data.tracks.items[0].name}`,
            `The preview link to the song is: ${data.tracks.items[0].preview_url}`,
            `The album name of this song is: ${data.tracks.items[0].album.name}`
          ];

          fs.appendFile("log.txt", text, function(err) {
            // If an error was experienced we will log it.
            if (err) {
              console.log(err);
            }
          });
        });
      }
      break;

    case "movie-this":
      if (process.argv.length == 3) {
        input = "Mr. Nobody";
        axios
          .get(
            "http://www.omdbapi.com/?t=" +
              input +
              "&y=&plot=short&apikey=trilogy"
          )
          .then(function(response) {
            console.log(
              "---------------------------------------------------------------"
            );
            console.log(`The title is: ${response.data.Title}`);
            console.log(`The year is: ${response.data.Year}`);
            console.log(`The IMDB rating is: ${response.data.imdbRating}`);
            console.log(
              `The Rotten Tomatoes rating is: ${response.data.Ratings[1].Value}`
            );
            console.log(`The country is: ${response.data.Country}`);
            console.log(`The language is: ${response.data.Language}`);
            console.log(`The plot is: ${response.data.Plot}`);
            console.log(`The actors are: ${response.data.Actors}`);
            console.log(
              "---------------------------------------------------------------"
            );

            let text = [
              `The title is: ${response.data.Title}`,
              `The year is: ${response.data.Year}`,
              `The IMDB rating is: ${response.data.imdbRating}`,
              `The Rotten Tomatoes rating is: ${response.data.Ratings[1].Value}`,
              `The country is: ${response.data.Country}`,
              `The language is: ${response.data.Language}`,
              `The plot is: ${response.data.Plot}`,
              `The actors are: ${response.data.Actors}`
            ];

            fs.appendFile("log.txt", text, function(err) {
              // If an error was experienced we will log it.
              if (err) {
                console.log(err);
              }
            });
          });
      } else if (process.argv.length > 3) {
        axios
          .get(
            "http://www.omdbapi.com/?t=" +
              input +
              "&y=&plot=short&apikey=trilogy"
          )
          .then(function(response) {
            console.log(
              "---------------------------------------------------------------"
            );
            console.log(`The title is: ${response.data.Title}`);
            console.log(`The year is: ${response.data.Year}`);
            console.log(`The IMDB rating is: ${response.data.imdbRating}`);
            console.log(
              `The Rotten Tomatoes rating is: ${response.data.Ratings[1].Value}`
            );
            console.log(`The country is: ${response.data.Country}`);
            console.log(`The language is: ${response.data.Language}`);
            console.log(`The plot is: ${response.data.Plot}`);
            console.log(`The actors are: ${response.data.Actors}`);
            console.log(
              "---------------------------------------------------------------"
            );

            let text = [
              `The title is: ${response.data.Title}`,
              `The year is: ${response.data.Year}`,
              `The IMDB rating is: ${response.data.imdbRating}`,
              `The Rotten Tomatoes rating is: ${response.data.Ratings[1].Value}`,
              `The country is: ${response.data.Country}`,
              `The language is: ${response.data.Language}`,
              `The plot is: ${response.data.Plot}`,
              `The actors are: ${response.data.Actors}`
            ];

            fs.appendFile("log.txt", text, function(err) {
              // If an error was experienced we will log it.
              if (err) {
                console.log(err);
              }
            });
          });
      }
      break;

    case "do-what-it-says":
      fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
          return console.log(err);
        }

        let dataArr = data.split(",");
        command = dataArr[0];
        input = dataArr[1];

        liriBot(); // recursive function call
      });
      break;

    default:
      console.log("invalid command!");
  }
}
liriBot();
