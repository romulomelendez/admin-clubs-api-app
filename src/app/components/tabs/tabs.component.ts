import { Component, inject } from '@angular/core'
import { TabMenuComponent } from "../tab-menu/tab-menu.component"
import { TabService } from '../../services/tabs.service'
import { LoginTabComponent } from "../login-tab/login-tab.component";
import { RegisterTabComponent } from "../register-tab/register-tab.component";

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [TabMenuComponent, LoginTabComponent, RegisterTabComponent],
  templateUrl: './tabs.component.html'
})
export class TabsComponent {

  private tabService = inject(TabService)

  tabSelected = () => this.tabService.tabSelected()
}
