import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import SpotifyWebApi from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root',
})
export class SpotifyRequestsService {
  s: SpotifyWebApi.SpotifyWebApiJs;

  constructor(private route: ActivatedRoute) {
    this.s = new SpotifyWebApi();
    // this.s.setAccessToken(this.getAccessTokenFromLocalStorage());
  }


}

