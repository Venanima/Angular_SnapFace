import {Component, OnInit} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import { FaceComponent } from "./face/face.component";
import {CommonModule} from "@angular/common";
import {SnapLisComponent} from "./snap-lis/snap-lis.component";
import {HeaderComponent} from "./header/header.component";
import {interval, Observable} from "rxjs";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FaceComponent,
  CommonModule,
  SnapLisComponent,
  HeaderComponent,
  HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  intervals!: Observable<number>;

  ngOnInit() {
    this.intervals =  interval(1000);
  }
}
