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

  constructor(private spotify: SpotifyRequestsService) {
    this.spotify.saveDataHashToLocalStorage();
    this.dataResponse = this.spotify.getDataFromLocalStorage();
  }

  ngOnInit(): void {
    console.log(this.dataResponse);
  }
}
