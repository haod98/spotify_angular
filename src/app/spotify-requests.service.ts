import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import SpotifyWebApi from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root',
})
export class SpotifyRequestsService {
  s: SpotifyWebApi.SpotifyWebApiJs;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.s = new SpotifyWebApi();
    this.s.setAccessToken(this.getAccessTokenFromLocalStorage());
  }

  createObjectFromHashUrl(): Object | null {
    let responseData: { [key: string]: string } = {};
    this.route.fragment.subscribe((hashFragment) => {
      hashFragment?.split('&').forEach((keyValue) => {
        const keyValueArr = keyValue.split('=');
        const key = keyValueArr[0];
        const value = keyValueArr[1];
        responseData[key] = value;
      });
    });

    if (!responseData) {
      return null;
    }
    return responseData;
  }

  saveDataHashToLocalStorage(): void {
    const data = this.createObjectFromHashUrl();
    if (data) {
      const dataToString = JSON.stringify(data);
      localStorage.setItem('data', dataToString);
    }
  }

  getItemFromLocalStorage(item: string = 'data'): Object {
    const data = localStorage.getItem(item);
    return JSON.parse(data!);
  }

  getAccessTokenFromLocalStorage(): string {
    return JSON.parse(localStorage.getItem('data')!)['access_token'];
  }
}
