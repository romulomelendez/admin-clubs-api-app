import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageTokenService {

  private token_key = "api_token"

  getToken = (): string | null => localStorage.getItem(this.token_key)

  setToken = (token: string) => localStorage.setItem(this.token_key, token)

  clearToken = (): void => localStorage.removeItem(this.token_key)
}
