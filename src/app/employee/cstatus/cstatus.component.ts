import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cstatus',
  templateUrl: './cstatus.component.html',
  styleUrls: ['./cstatus.component.css']
})
export class CstatusComponent implements OnInit {
  cstatusFormGroup!: FormGroup;
  @Input() empDataById : any;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cstatusFormGroup = this._formBuilder.group({
      companyCtrl: new FormControl('', [Validators.required]),
      desigCtrl: new FormControl('', [Validators.required]),
      deptCtrl: new FormControl('', [Validators.required]),
      wdateCtrl: new FormControl('', [Validators.required]),
      ctcCtrl: new FormControl('', [Validators.required]),
    });
    if(this.empDataById){
    this.cstatusFormGroup.patchValue({
      companyCtrl: this.empDataById.companyCtrl,
      desigCtrl: this.empDataById.desigCtrl,
      deptCtrl: this.empDataById.deptCtrl,
      wdateCtrl: this.empDataById.wdateCtrl,
      ctcCtrl: this.empDataById.ctcCtrl
    });}
  }

}
