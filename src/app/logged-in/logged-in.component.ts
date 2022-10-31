import { Component, OnInit } from '@angular/core';
import { SpotifyRequestsService } from '../spotify-requests.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css'],
})
export class LoggedInComponent implements OnInit {
  dataResponse: Object | null;
  userData!: Promise<SpotifyApi.CurrentUsersProfileResponse>;

  constructor(private spotifyService: SpotifyRequestsService) {
    this.spotifyService.saveDataHashToLocalStorage();
    this.dataResponse = this.spotifyService.getItemFromLocalStorage();
  }

  async ngOnInit() {
    this.userData = this.spotifyService.s.getMe();
    console.log(await this.userData);
  }
}
