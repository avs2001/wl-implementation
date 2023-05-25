import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultPageComponent} from "@kebormed/layout/yoda";
import {NavbarProjectorComponent} from "@kebormed/layout";
import {
  ButtonComponent,
  CardComponent,
  CardContentDirective,
  CardHeaderComponent,
  CardTitleDirective
} from "@kebormed/core";
import {Dialog, DialogModule} from "@angular/cdk/dialog";
import {CreateComponent} from "../create/create.component";
import {ViewComponent} from "../view/view.component";

@Component({
  selector: 'sa-list',
  standalone: true,
  imports: [CommonModule, DefaultPageComponent, NavbarProjectorComponent, CardComponent, CardHeaderComponent, ButtonComponent, DialogModule, CardContentDirective, CardTitleDirective],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  dialog = inject(Dialog);

  openCrateDialog() {
    this.dialog.open(CreateComponent, {
      maxWidth: '100vw',
      minWidth: '768px',
      disableClose: true,
    }).closed.subscribe(console.log);
  }

  openViewDialog() {
    this.dialog.open(ViewComponent, {
      maxWidth: '100vw',
      minWidth: '768px',
      disableClose: true,
    }).closed.subscribe(console.log);
  }
}
