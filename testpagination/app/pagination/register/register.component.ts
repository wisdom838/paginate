import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formValidate: FormGroup;
  displayfalg:boolean=false;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formValidate = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required]],
      address: this.formBuilder.group({
        street: [null, Validators.required],
        street2: [null],
        zipCode: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        country: [null, Validators.required]
      })
    });
  }

  isFieldValid(field: string) {
    return !this.formValidate.get(field).valid && this.formValidate.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  onSubmit() {
    this.displayfalg=true;
    console.log(this.formValidate);
    if (this.formValidate.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.formValidate);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  reset(){
    this.formValidate.reset();
  }
}