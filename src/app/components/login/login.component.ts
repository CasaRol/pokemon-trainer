import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    trainerName: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  });

  get trainerName(): AbstractControl {
    return this.loginForm.get("trainerName");
  }

  onLoginClicked() {
    console.log("Login Clicked!");
    console.log(this.loginForm.value);
  }
}
