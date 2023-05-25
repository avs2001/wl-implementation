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
import {DialogRef} from "@angular/cdk/dialog";
import {UserFormComponent} from "@kebormed/kit";


@Component({
  selector: 'sa-view',
  standalone: true,
  imports: [CommonModule, DefaultPageComponent, NavbarProjectorComponent, CardComponent, CardContentDirective, CardHeaderComponent, CardTitleDirective, UserFormComponent, ButtonComponent],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  dialogRef = inject(DialogRef)
}
