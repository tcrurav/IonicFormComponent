import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bicycle-form',
  templateUrl: './bicycle-form.component.html',
  styleUrls: ['./bicycle-form.component.scss'],
})
export class BicycleFormComponent implements OnInit {

  bicycleForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.bicycleForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  ngOnInit() { }

  get errorControl() {
    return this.bicycleForm.controls;
  }

  submitForm = () => {
    if (this.bicycleForm.valid) {
      console.log(this.bicycleForm.value);
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };

}
