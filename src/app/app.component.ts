import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LogoComponent} from "@kebormed/layout";
import {
  DrawerComponent,
  SidebarComponent,
  SidebarMenuItemComponent,
  MainContainerComponent,
  ToolbarComponent, SidebarMenuComponent
} from "@kebormed/layout/yoda";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {IconComponent} from "@kebormed/core";

@Component({
  selector: 'sa-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    LogoComponent,
    SidebarComponent,
    DrawerComponent,
    SidebarMenuComponent,
    SidebarMenuItemComponent,
    ToolbarComponent,
    RouterOutlet,
    MainContainerComponent,
    IconComponent,
    RouterLink,
    RouterLinkActive,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

}
