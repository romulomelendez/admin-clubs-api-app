import { Component } from '@angular/core'
import { TabsComponent } from "../../components/tabs/tabs.component"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TabsComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  logo: string = "assets/images/logo.png"
}
