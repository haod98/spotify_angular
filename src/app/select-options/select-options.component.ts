import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.css']
})
export class SelectOptionsComponent implements OnInit {

  public form: FormGroup;
  public selection = 'tracks';

  constructor() {
    this.form = new FormGroup<any>(
      {
        results: new FormControl('tracks'),
      }
    );
  }

  ngOnInit(): void {

  }

  test() {
    console.log(this.selection);
  }
}
