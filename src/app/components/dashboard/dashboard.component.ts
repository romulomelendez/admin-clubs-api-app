import { Router } from '@angular/router'
import { AuthService } from './../../services/auth/auth.service'
import { Component } from '@angular/core'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.clearToken()
    this.router.navigate(['admin'])
  }
}
