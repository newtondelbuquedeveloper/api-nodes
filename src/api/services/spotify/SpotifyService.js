/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */
import axios from "axios";
import _ from "lodash";
import { SPOTIFY_SONGS_URL as url } from "../../../config";

export async function getTracks(type, token) {
  const response = await axios({
    method: "GET",
    url: `${url}?type=track&q=${type}`,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

  let titleSongs = [];
  _.forEach(response.data.tracks.items, value => titleSongs.push(value.name));

  return titleSongs;
}
