import {Component, OnInit} from '@angular/core';
import {SpotifyRequestsService} from '../spotify-requests.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.css'],
})
export class TopArtistsComponent implements OnInit {
  myTopArtists!: Promise<SpotifyApi.UsersTopArtistsResponse>;

  constructor(private requestsService: SpotifyRequestsService) {
    this.myTopArtists = this.requestsService.spotify.getMyTopArtists({limit: 10});
  }

  async ngOnInit(): Promise<void> {
    // console.log(await this.myTopArtists);
  }
}
