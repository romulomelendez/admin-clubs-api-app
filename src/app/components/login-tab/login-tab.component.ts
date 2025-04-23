import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { FormValidationService } from '../../shared/validation/form-validation.service'

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

  validateService = inject(FormValidationService)

  handleLogin = () => {
    
    if(!this.validateService.isValid(this.loginForm))
      return

    console.log(this.loginForm.valid)
  }
}
