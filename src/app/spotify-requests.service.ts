import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import SpotifyWebApi from 'spotify-web-api-js';
import {ResponseData} from "./types";

@Injectable({
  providedIn: 'root',
})
export class SpotifyRequestsService {
  s: SpotifyWebApi.SpotifyWebApiJs;
  LOCALSTORAGE_DATA_NAME = 'data';

  constructor(private route: ActivatedRoute) {
    this.s = new SpotifyWebApi();
    this.s.setAccessToken(this.getAccessTokenFromLocalStorage());
  }

  public saveDataHashToLocalStorage(): void {
    const data = this.createResponseObjectFromHash();
    if (data) {
      const dataToString = JSON.stringify(data);
      localStorage.setItem(this.LOCALSTORAGE_DATA_NAME, dataToString);
    }
  }

  public getDataFromLocalStorage(): ResponseData {
    const data = localStorage.getItem(this.LOCALSTORAGE_DATA_NAME);
    return JSON.parse(data!);
  }

  private createResponseObjectFromHash(): ResponseData {
    const hashObject = this.createObjectFromHashUrl();
    return {
      access_token: hashObject['access_token'] || "",
      expires_in: hashObject['expires_in'] || "",
      token_type: hashObject['token_type'] || "",
    }
  }

  private getAccessTokenFromLocalStorage(): string | null {
    const dataFromLocalStorage = localStorage.getItem(this.LOCALSTORAGE_DATA_NAME);
    if (dataFromLocalStorage) {
      return JSON.parse(dataFromLocalStorage)['access_token'];
    }
    return null;
  }

  private createObjectFromHashUrl(): Record<string, string> {
    let responseData: { [key: string]: string } = {};
    this.route.fragment.subscribe((hashFragment) => {
      hashFragment?.split('&').forEach((keyValue) => {
        const keyValueArr = keyValue.split('=');
        const key = keyValueArr[0];
        responseData[key] = keyValueArr[1];
      });
    });
    return responseData;
  }
}
