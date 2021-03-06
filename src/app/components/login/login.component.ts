import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private localStorageService: LocalStorageService) {}

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
    this.localStorageService.storeTrainerName(this.trainerName.value);
  }
}
