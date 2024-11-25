import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";


@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule
  ],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {

  userEmail!: string;

  onSubmitForm(form: NgForm): void{
    console.log(form.value)
  }

}
