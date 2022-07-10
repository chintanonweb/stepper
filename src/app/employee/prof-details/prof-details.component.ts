import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prof-details',
  templateUrl: './prof-details.component.html',
  styleUrls: ['./prof-details.component.css']
})
export class ProfDetailsComponent implements OnInit {
  profFormGroup!: FormGroup;
  techList: string[] = ['Angular', 'React', 'Dot Net', 'Python', 'Java',];
  @Input() empDataById : any;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.profFormGroup = this._formBuilder.group({
      techCtrl: new FormControl('',[Validators.required]),
      yearCtrl: new FormControl('', [Validators.required, Validators.pattern(/\-?\d*\.?\d{1,2}/)]),
      monthCtrl: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
    if(this.empDataById){
    this.profFormGroup.patchValue({
      techCtrl: this.empDataById.techCtrl,
      yearCtrl: this.empDataById.yearCtrl,
      monthCtrl: this.empDataById.monthCtrl,
    });}
  }

}
