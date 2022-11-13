import {Injectable} from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';
import {ResponseData} from "./types";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class SpotifyRequestsService {
  spotify: SpotifyWebApi.SpotifyWebApiJs = new SpotifyWebApi();
  LOCALSTORAGE_DATA_NAME = environment.LOCAL_STORAGE_DATA_NAME;

  constructor() {
    this.spotify.setAccessToken(this.getDataFromLocalStorage().access_token);
  }

  public getDataFromLocalStorage(): ResponseData {
    const data = localStorage.getItem(this.LOCALSTORAGE_DATA_NAME);
    return JSON.parse(data!);
  }

}

