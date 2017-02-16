import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { MdRadioGroup, MdRadioButton } from '@angular/material';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class FormSelectComponent{
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
