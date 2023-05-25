import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ButtonComponent,
  CardComponent,
  CardContentDirective,
  CardHeaderComponent,
  CardTitleDirective
} from "@kebormed/core";
import {PatientFormComponent, UserFormComponent} from "@kebormed/kit";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'sa-create',
  standalone: true,
  imports: [CommonModule, CardComponent, CardContentDirective, UserFormComponent, PatientFormComponent, CardHeaderComponent, CardTitleDirective, ButtonComponent],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent {
  dialogRef = inject(DialogRef);
}
