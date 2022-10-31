import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponseData } from '../types';
import { SpotifyRequestsService } from '../spotify-requests.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css'],
})
export class LoggedInComponent implements OnInit {
  dataResponse: Object | null;
  userData: Object = {};

  constructor(private spotify: SpotifyRequestsService) {
    this.spotify.saveDataHashToLocalStorage();
    this.dataResponse = this.spotify.getItemFromLocalStorage();
  }

  ngOnInit(): void {
    this.spotify.getUserData().subscribe((data) => {
      this.userData = data;
      console.log(this.userData);
    });
  }

  getAlbum() {
    this.spotify.getAlbum();
  }
}
