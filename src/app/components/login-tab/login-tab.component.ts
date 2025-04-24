import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { FormValidationService } from '../../shared/validation/form-validation.service'
import { ApiRequestService } from '../../shared/http/api-request.service'
import { MatIconModule } from '@angular/material/icon'
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth/auth.service';

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

  private readonly router = inject(Router)
  passwordVisibilityStatus = false
  passwordInputType = "password"
  validateService = inject(FormValidationService)
  apiService = inject(ApiRequestService)
  authService = inject(AuthService)

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

    this.authService.saveToken(token)
    this.router.navigate(['admin/dashboard'])
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
