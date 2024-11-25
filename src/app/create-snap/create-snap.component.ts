import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {FaceSnap} from "../models/face-snap.model";
import {AsyncPipe, DatePipe, NgIf, TitleCasePipe} from "@angular/common";
import {SnapServices} from "../services/snap.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-snap',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePipe,
    NgIf,
    TitleCasePipe,
    AsyncPipe
  ],
  templateUrl: './create-snap.component.html',
  styleUrl: './create-snap.component.scss'
})
export class CreateSnapComponent implements OnInit{

  snapForm!: FormGroup;
  snapPreview$!: Observable<FaceSnap>;
  urlReg!: RegExp;

  constructor(private formBuilder: FormBuilder,
              private SnapService: SnapServices,
              private router: Router) {
  }

  ngOnInit() {
    this.urlReg = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlReg)]],
      location: [null]
    },{
      updateOn: 'blur'
    });
    this.snapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createDate: new Date(),
        id: 0,
        snaps: 0
      }))
    );
  }

  onSubmitForm():void{
    this.SnapService.createSnap(this.snapForm.value);
    this.router.navigateByUrl('/snap')
  }

}
