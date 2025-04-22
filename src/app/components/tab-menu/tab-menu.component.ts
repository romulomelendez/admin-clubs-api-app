import { Component, inject } from '@angular/core'
import { TabService } from './../../services/tabs.service'

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [],
  templateUrl: './tab-menu.component.html'
})

export class TabMenuComponent {

  private tabService = inject(TabService)

  toggleTab = (tab: string) => this.tabService.toggleTab(tab)
}