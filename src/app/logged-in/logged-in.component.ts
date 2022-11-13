import {Component, OnInit} from '@angular/core';
import {SpotifyRequestsService} from '../spotify-requests.service';
import {ResponseData} from "../types";

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css'],
})
export class LoggedInComponent implements OnInit {
  dataResponse!: ResponseData | null;
  userData!: Promise<SpotifyApi.CurrentUsersProfileResponse>;

  constructor(private requestsService: SpotifyRequestsService) {
    this.userData = requestsService.spotify.getMe();
  }

  async ngOnInit() {
  }
}
