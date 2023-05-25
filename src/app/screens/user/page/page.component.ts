import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {DefaultPageComponent} from "@kebormed/layout/yoda";

@Component({
  selector: 'sa-page',
  standalone: true,
  imports: [RouterOutlet, DefaultPageComponent],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

}
