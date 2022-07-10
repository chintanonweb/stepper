import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu-details',
  templateUrl: './edu-details.component.html',
  styleUrls: ['./edu-details.component.css']
})
export class EduDetailsComponent implements OnInit {
  pdetailsFormGroup!: FormGroup;
  bankFormGroup!: FormGroup;
  profFormGroup!: FormGroup;
  cstatusFormGroup!: FormGroup;
  expFormGroup!: FormGroup;
  eduFormGroup!: FormGroup;
  @Input() empDataById: any;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.eduFormGroup = this._formBuilder.group({
      education: new FormArray([this.getNewEducationGroup()])
    });

    if (this.empDataById) {
      this.eduFormGroup = this._formBuilder.group({
        education: new FormArray(this.empDataById.eduData.education.length < 0 ? this.getNewEducationGroup()
          : this.empDataById.eduData.education.map((obj: any) => { return this.getNewEducationGroup() })
        )
      });

      if (this.empDataById.eduData.education.length) 
        { this.eduFormGroup.patchValue(this.empDataById.eduData); }

    }
  }

  get education() {
    return this.eduFormGroup.get('education') as FormArray;
  }
  
  addEducation() {
    this.education.push(this.getNewEducationGroup());
  }

  getNewEducationGroup() {
    return new FormGroup({
      courseCtrl: new FormControl('', [Validators.required]),
      passCtrl: new FormControl('', [Validators.required]),
      toCtrl: new FormControl('', [Validators.required]),
      uniCtrl: new FormControl('', [Validators.required]),
      gradeCtrl: new FormControl('', [Validators.required]),
    });
  }

  deleteEducation(index: number) {
    this.education.removeAt(index);
  }


}
