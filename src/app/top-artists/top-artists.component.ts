import {Component, OnInit} from '@angular/core';
import {SpotifyRequestsService} from '../spotify-requests.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.css'],
})
export class TopArtistsComponent implements OnInit {
  myTopArtists!: Promise<SpotifyApi.UsersTopArtistsResponse>;

  constructor(private spotifyRequest: SpotifyRequestsService) {
    this.myTopArtists = this.spotifyRequest.s.getMyTopArtists({limit: 10});
  }

  async ngOnInit(): Promise<void> {
    console.log(await this.myTopArtists);
  }
}
