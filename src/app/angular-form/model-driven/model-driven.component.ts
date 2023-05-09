import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {

  // @ts-ignore
  public signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.createSignUpForm();
  }

  createSignUpForm() {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      email: [''],
      password: [''],
      dob: [''],
    })
  }


  onSubmit() {
    const rawValue = this.signUpForm.getRawValue();
    if (this.signUpForm.valid) {
      console.log('rawValue', rawValue);
    } else {
      alert('Kindly Fill Required Fields')
    }

  }
}
