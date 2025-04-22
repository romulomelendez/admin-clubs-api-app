import { Component, inject } from '@angular/core'
import { TabMenuComponent } from "../tab-menu/tab-menu.component"
import { TabService } from '../../services/tabs.service'

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [TabMenuComponent],
  templateUrl: './tabs.component.html'
})
export class TabsComponent {

  private tabService = inject(TabService)

  tabSelected = () => this.tabService.tabSelected()
}
