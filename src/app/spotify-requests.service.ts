import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyRequestsService {
  constructor(private route: ActivatedRoute) {}

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

  getDataFromLocalStorage(): Object | null {
    const responseData = localStorage.getItem('data');
    if (!responseData) {
      console.error('LocalStorage probably empty');
      return null;
    }
    return JSON.parse(responseData!);
  }
}
