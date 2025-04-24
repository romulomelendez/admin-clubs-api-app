import { CanActivate, Router } from '@angular/router'
import { AuthService } from '../services/auth/auth.service'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate = () => {
    if(this.authService.isLoggedIn())
      return true

    this.router.navigate(['admin'])
    return false
  }
}