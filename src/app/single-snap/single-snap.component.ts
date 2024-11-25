import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {SnapServices} from "../services/snap.services";
import {CommonModule, DatePipe, DecimalPipe, NgIf, TitleCasePipe} from "@angular/common";
import {ActivatedRoute, RouterModule} from "@angular/router";

@Component({
  selector: 'app-single-snap',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    NgIf,
    TitleCasePipe,
    CommonModule,
    RouterModule
  ],
  templateUrl: './single-snap.component.html',
  styleUrl: './single-snap.component.scss'
})
export class SingleSnapComponent implements OnInit{

  faceSnap!: FaceSnap;

  snapmsg!: string;

  constructor(private snapServices: SnapServices,
              private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.snapmsg = "Oh Snap!";
    const snapID =+ this.route.snapshot.params['id'];
    this.faceSnap = this.snapServices.getSnapByID(snapID);
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


}
