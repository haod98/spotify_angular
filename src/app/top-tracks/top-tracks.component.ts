import {Component, OnInit} from '@angular/core';
import {SpotifyRequestsService} from "../spotify-requests.service";

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.css']
})
export class TopTracksComponent implements OnInit {

  myTopTracks!: Promise<SpotifyApi.UsersTopTracksResponse>;

  constructor(private spotify: SpotifyRequestsService) {
    this.myTopTracks = spotify.s.getMyTopTracks({limit: 10, time_range: "short_term"});
  }

  async ngOnInit(): Promise<void> {
    console.log('hello');
    console.log(await this.myTopTracks);
  }

}
