import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceComponent} from "../face/face.component";
import {NgForOf} from "@angular/common";
import {SnapServices} from "../services/snap.services";

@Component({
  selector: 'app-snap-lis',
  standalone: true,
  imports: [
    FaceComponent,
    NgForOf
  ],
  templateUrl: './snap-lis.component.html',
  styleUrl: './snap-lis.component.scss'
})
export class SnapLisComponent implements OnInit{
  allSnaps!: FaceSnap [];

  constructor(private SnapServices: SnapServices) {
  }

  ngOnInit() {
    this.allSnaps = this.SnapServices.getAllSnaps();
  }
}
