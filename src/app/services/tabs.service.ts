import { Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabSelected = signal<string>("login")

  toggleTab(tab: string) {
    if (this.tabSelected() !== tab) {
      this.tabSelected.set(this.tabSelected() === "login" ? "register" : "login")
    }
  }
}
