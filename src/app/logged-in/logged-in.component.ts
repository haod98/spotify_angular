import {Component, OnInit} from '@angular/core';
import {SpotifyRequestsService} from '../spotify-requests.service';
import {ResponseData} from "../types";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css'],
})
export class LoggedInComponent implements OnInit {
  dataResponse!: ResponseData | null;
  userData!: Promise<SpotifyApi.CurrentUsersProfileResponse>;
  public form!: FormGroup;
  public selection = 'tracks';

  constructor(private requestsService: SpotifyRequestsService, private builder: FormBuilder) {
    this.userData = requestsService.spotify.getMe();
  };

  ngOnInit() {
    this.form = new FormGroup(
      {
        results: new FormControl(this.selection),
      }
    );
  };

  public toggleTopArtistsAndTrack(): void {
    this.selection = this.form.value.results
  };
}

