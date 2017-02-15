import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent{
  matches = [1, 2, 3, 4, 5];

  selectForm = new FormGroup ({
    numberOfMatches: new FormControl(),
    result: new FormArray([
      new FormControl('win'),
      new FormControl('draw'),
      new FormControl('loss')
    ])
  });
}
