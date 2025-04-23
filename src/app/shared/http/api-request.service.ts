import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { environment } from '../../../../environment.development'
import { firstValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  private apiUrl: string = ""

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = environment.apiUrl
  }

  private mountApiUrl = (endpoint: string): string => this.getApiUrl() + endpoint

  public call = async (endpoint: string, method: string, data: any): Promise<string | any> => {
    
    const url = this.mountApiUrl(endpoint)

    switch(method) {
      case "POST":
        try {
          const response = await firstValueFrom(this.http.post<{ token: string }>(url, data))
          const token = response.token
        } catch (error) {
          console.error(error)
        }
        break

      default:
        alert("Invalid Method!")
        break
    }
  }

  private getApiUrl = () => this.apiUrl
}
