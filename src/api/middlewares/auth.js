/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { SPOTIFY_AUTH_URL as url, SPOTIFY_AUTHORIZATION as auth } from "../../config";

export async function tokenSpotify(code) {
  const headers = {
    Authorization: auth
  };

  const dataString = `grant_type=client_credentials&code=${code}`;

  const options = {
    url: url,
    method: "POST",
    headers,
    data: dataString
  };

  const response = await axios(options);
  return response.data;
}
