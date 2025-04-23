import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { FormValidationService } from '../../shared/validation/form-validation.service'
import { ApiRequestService } from '../../shared/http/api-request.service'

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
  apiService = inject(ApiRequestService)

  handleLogin = () => {
    
    if(!this.validateService.isValid(this.loginForm))
      return

    const username = this.loginForm.get('username')?.value
    const password = this.loginForm.get('password')?.value

    this.apiService.call(
      "/login",
      "POST",
      {
        username,
        password
      }
    )
  }
}
