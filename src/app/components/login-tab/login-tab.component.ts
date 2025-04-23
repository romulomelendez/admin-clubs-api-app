import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { FormType } from "./login-tab.types"

@Component({
  selector: 'app-login-tab',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-tab.component.html'
})

export class LoginTabComponent {

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.minLength(4),
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.minLength(5),
      Validators.required
    ])
  })

  validateForm = (form: FormType): boolean => form.valid

  handleLogin = () => {
    
    if(!this.validateForm(this.loginForm))
      return

    console.log(this.loginForm.valid)
  }
}
