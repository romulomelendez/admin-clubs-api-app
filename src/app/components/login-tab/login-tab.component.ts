import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { FormValidationService } from '../../shared/validation/form-validation.service'
import { ApiRequestService } from '../../shared/http/api-request.service'
import { LocalStorageTokenService } from '../../shared/auth/local-storage-token.service'
import { MatIconModule } from '@angular/material/icon'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-tab',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule],
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

  passwordVisibilityStatus = false
  passwordInputType = "password"
  validateService = inject(FormValidationService)
  apiService = inject(ApiRequestService)
  localStorageService = inject(LocalStorageTokenService)
  private readonly router = inject(Router)

  handleLogin = async () => {
    
    if(!this.validateService.isValid(this.loginForm))
      return

    const username = this.loginForm.get('username')?.value ?? ''
    const password = this.loginForm.get('password')?.value ?? ''

    const token = await this.apiService.call(
      "/login",
      "POST",
      {
        username,
        password
      }
    )

    this.localStorageService.setToken(token)
    this.router.navigate(['admin'])
  }

  togglePwdVisibility = () => {
    if (this.passwordInputType === 'password') {
      this.passwordInputType = 'text'
      this.passwordVisibilityStatus = true
      return
    }

    this.passwordInputType = 'password'
    this.passwordVisibilityStatus = false
    return
  }
}
