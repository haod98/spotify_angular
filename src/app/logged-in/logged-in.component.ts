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
  public form: FormGroup;
  public selection = 'tracks';

  //TODO: Fix console log warning
  constructor(private requestsService: SpotifyRequestsService, private builder: FormBuilder) {
    this.userData = requestsService.spotify.getMe();
    this.form = new FormGroup<{ results: FormControl }>(
      {
        results: new FormControl('tracks'),
      }
    );
  }

  selectChange(event: Event) {
    console.log(this.selection);
    console.log(event);
  }

  async ngOnInit() {
  }
}
