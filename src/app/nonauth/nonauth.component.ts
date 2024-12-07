import { Component } from '@angular/core';
import {BreadcrumbComponent} from 'xng-breadcrumb';

@Component({
  selector: 'app-nonauth',
  standalone: true,
  imports: [
    BreadcrumbComponent
  ],
  templateUrl: './nonauth.component.html',
  styleUrl: './nonauth.component.css'
})
export class NonauthComponent {

}
