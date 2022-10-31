import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyRequestsService {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

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

  getAlbum() {
    const data: any = this.getItemFromLocalStorage();
    this.http
      .get('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy', {
        headers: {
          Authorization: `Bearer ${data['access_token']}`,
        },
      })
      .subscribe((response) => console.log(response));
  }

  getUserData(): Observable<any> {
    return this.endpointRequest('https://api.spotify.com/v1/me');
  }

  endpointRequest(endpoint: string): Observable<any> {
    const data: any = this.getItemFromLocalStorage();
    return this.http.get(endpoint, {
      headers: {
        Authorization: `Bearer ${data['access_token']}`,
      },
    });
  }
}
