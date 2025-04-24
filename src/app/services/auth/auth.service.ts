import { isPlatformBrowser } from "@angular/common"
import { Inject, Injectable, PLATFORM_ID } from "@angular/core"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'api_token'
  private isBrowser: boolean

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId)
  }

  isLoggedIn(): boolean {
    if (this.isBrowser) {
      return !!localStorage.getItem(this.tokenKey)
    }
    return false
  }

  saveToken(token: string) {
    if (this.isBrowser) {
      localStorage.setItem(this.tokenKey, token)
    }
  }

  clearToken() {
    if (this.isBrowser) {
      localStorage.removeItem(this.tokenKey)
    }
  }
}
