import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceComponent } from "./face/face.component";
import {CommonModule} from "@angular/common";
import {SnapLisComponent} from "./snap-lis/snap-lis.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FaceComponent,
  CommonModule,
  SnapLisComponent,
  HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent{
}
