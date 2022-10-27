import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponseData } from '../types';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css'],
})
export class LoggedInComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.createObjectFromHashUrl());
  }

  createObjectFromHashUrl(): Object {
    let responseData: any = {};
    this.route.fragment.subscribe((hashFragment) => {
      hashFragment?.split('&').forEach((keyValue) => {
        const keyValueArr = keyValue.split('=');
        const key = keyValueArr[0];
        const value = keyValueArr[1];
        responseData[key] = value;
      });
    });
    return responseData;
  }
}
