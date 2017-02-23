import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-event-scan',
  templateUrl: './event-scan.component.html',
  styleUrls: ['./event-scan.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class EventScanComponent{
  selectForm: FormGroup;
  results: FormArray;
  events = ['win', 'draw', 'loss'];

  constructor(private _fb: FormBuilder) {
    this.selectForm = this._fb.group({
      results: this.buildArray()
    });
  }

  buildArray(): FormArray {
    this.results = this._fb.array([
      this.buildGroup()
    ]);
    return this.results;
  }

  buildGroup(): FormGroup {
    return this._fb.group({
      result: ''
    });
  }

  add() {
    this.results.push(this.buildGroup());
  }
}
