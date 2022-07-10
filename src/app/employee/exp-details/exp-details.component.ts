import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exp-details',
  templateUrl: './exp-details.component.html',
  styleUrls: ['./exp-details.component.css']
})
export class ExpDetailsComponent implements OnInit {
  expFormGroup!:FormGroup;
  @Input() empDataById : any;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.expFormGroup = this._formBuilder.group({
      experience: new FormArray([this.getNewExperieceGroup()])
    });

    if(this.empDataById){
    this.expFormGroup = this._formBuilder.group({
      experience: new FormArray(this.empDataById.expData.experience.length < 0 ? this.getNewExperieceGroup() 
      : this.empDataById.expData.experience.map((obj:any) => { return this.getNewExperieceGroup()})
      )
    });

    if (this.empDataById.expData.experience.length) {
      this.expFormGroup.patchValue(this.empDataById.expData);
    }}
  }

  get experience(){
    return this.expFormGroup.get('experience') as FormArray;
  }

  addExperience(){
    this.experience.push(this.getNewExperieceGroup());
  }

  getNewExperieceGroup(){
    return new FormGroup({
    companyCtrl: new FormControl('', [Validators.required]),
    desigCtrl: new FormControl('', [Validators.required]),
    deptCtrl: new FormControl('', [Validators.required]),
    wdateCtrl: new FormControl('', [Validators.required]),
    tdateCtrl: new FormControl('', [Validators.required]),
    ctcCtrl: new FormControl('', [Validators.required]),
  });
  }

  deleteExperience(index: number){
    this.experience.removeAt(index);
  }

}
