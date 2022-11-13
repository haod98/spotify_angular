import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ResponseData} from "../types";
import {environment} from "../../environments/environment";
import SpotifyWebApi from "spotify-web-api-js";

@Component({
  selector: 'app-logged-redirect',
  templateUrl: './logged-redirect.component.html',
  styleUrls: ['./logged-redirect.component.css']
})
export class LoggedRedirectComponent implements OnInit {
  LOCALSTORAGE_DATA_NAME = environment.LOCAL_STORAGE_DATA_NAME;
  spotify: SpotifyWebApi.SpotifyWebApiJs = new SpotifyWebApi();

  constructor(private route: ActivatedRoute, private r: Router) {
  }

  ngOnInit(): void {
    if (this.hashUrlExits()) {
      this.saveDataHashToLocalStorage();
      this.spotify.setAccessToken(this.getAccessTokenFromLocalStorage());
    }
  }


  public getDataFromLocalStorage(): ResponseData {
    const data = localStorage.getItem(this.LOCALSTORAGE_DATA_NAME);
    return JSON.parse(data!);
  }

  public saveDataHashToLocalStorage(): void {
    const data = this.createResponseObjectFromHash();
    if (data) {
      const dataToString = JSON.stringify(data);
      localStorage.setItem(this.LOCALSTORAGE_DATA_NAME, dataToString);
    }
  }

  private hashUrlExits(): boolean {
    let hashExist = false;
    this.route.fragment.subscribe(hash => {
      if (hash) hashExist = true;
    });
    return hashExist;
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
}

