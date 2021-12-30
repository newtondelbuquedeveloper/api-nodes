import express from "express";

import * as weather from "../services/weather/WeatherService";
import * as spotify from "../services/spotify/SpotifyService";
import * as auth from "../middlewares/auth";
import * as location from "../middlewares/location"
import { rangeTemperature } from "../helpers/rangeNumber";
import { APP_URL as appUrl, SPOTIFY_LOGIN as spotifyLogin } from '../../config'
const playlist = express.Router();

const uri = encodeURIComponent(appUrl);

playlist.get("/", async (request, response) => {
  try {
    response.redirect(
      `/loginSpotify`
    );
  } catch (error) {
    response.send(error);
  }
});

playlist.get("/loginSpotify", async (request, response) => {
  try {
    response.redirect(
      `${spotifyLogin}${uri}`
    );
  } catch (error) {
    response.send(error);
  }
});

playlist.get("/playlist", async (request, response) => {
  try {
    let spotifyResult = {
      location: '',
      temperature: '',
      songGener: '',
      songs: []
    };

    let weatherResult = {};

    if (request.query.city) {
      spotifyResult.location = request.query.city;
      weatherResult = await weather.byCityName(request.query.city);
    } else if (request.query.lat && request.query.lon) {
      spotifyResult.location = `lat:${request.query.lat} lon:${request.query.lon}`
      weatherResult = await weather.byLatLonCoordinates(request.query.lat, request.query.lon);
    } else {
      const data = await location.userLocation();
      spotifyResult.location = data.geoplugin_city;
      weatherResult = await weather.byCityName(data.geoplugin_city);
    }

    const temperature = Math.round(weatherResult.main.temp);

    const songGener = rangeTemperature(temperature);

    const authorize = await auth.tokenSpotify(request.query.code);

    spotifyResult.songs = await spotify.getTracks(songGener, authorize.access_token);
    spotifyResult.temperature = `${temperature}°C`;
    spotifyResult.songGener = songGener;

    response.send(spotifyResult);
  } catch (error) {
    response.send(error);
  }
});

export default playlist;
