import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {CommonModule, NgIf} from "@angular/common";


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

  ngOnInit(){
    this.snapmsg = "Oh Snap!";
  }

  onSnap(){
    if (this.snapmsg == "Oh Snap!") {
      this.faceSnap.snaps++;
      this.snapmsg = "Don't Snap!";
    }else{
      this.faceSnap.snaps--;
      this.snapmsg = "Oh Snap!";
    }
  }

}
