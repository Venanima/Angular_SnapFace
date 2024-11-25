import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {CommonModule, NgIf} from "@angular/common";
import {SnapServices} from "../services/snap.services";
import {Router} from "@angular/router";


@Component({
  selector: 'app-face',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './face.component.html',
  styleUrl: './face.component.scss'
})
export class FaceComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  snapmsg!: string;

  constructor(private snapServices: SnapServices,
              private router: Router) {
  }

  ngOnInit(){
    this.snapmsg = "Oh Snap!";
  }

  onSnap(){
    if (this.snapmsg == "Oh Snap!") {
      this.snapServices.likeFaceSnapWthID(this.faceSnap.id, true);
      this.snapmsg = "Don't Snap!";
    }else{
      this.snapServices.likeFaceSnapWthID(this.faceSnap.id, false);
      this.snapmsg = "Oh Snap!";
    }
  }

  onViewSnap() {
    this.router.navigateByUrl(`snap/${this.faceSnap.id}`);
  }
}
