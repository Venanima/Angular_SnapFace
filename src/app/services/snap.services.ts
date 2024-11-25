import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class SnapServices{

  allSnaps: FaceSnap[] = [{
    id: 0,
    title: 'Titre',
    description: 'Une photo sans précedent',
    imageUrl: 'assets/Elden ring.png',
    createDate: new Date(),
    snaps: 0,
    location: 'A madrid'
  },
    {
      id: 1,
      title: '2eme photo',
      description: 'C\'est quand même vachement beau',
      imageUrl:'assets/usage.jpg',
      createDate: new Date(),
      snaps: 8
    }
  ];

  getAllSnaps(): FaceSnap[]{
    return this.allSnaps;
  }

  getSnapByID(SnapID: number): FaceSnap{
    const faceSnap = this.allSnaps.find(faceSnap =>faceSnap.id === SnapID);
    if(faceSnap)
      return faceSnap;
    else{
      throw new Error('ID of Snaps unknown');
    }
  }

  likeFaceSnapWthID(SnapID: number, snapBool: boolean): void{
    const faceSnap = this.getSnapByID(SnapID);
      if(snapBool)
        faceSnap.snaps++;
      else{
        faceSnap.snaps--;
      }
  }

  createSnap(snapValue:{ title: string, description: string, imageUrl: string, location?: string }) {
    const faceSnap: FaceSnap = {
      ...snapValue,
      snaps: 0,
      createDate: new Date(),
      id: this.allSnaps[this.allSnaps.length - 1].id + 1
    };
    this.allSnaps.push(faceSnap);
  }
}
