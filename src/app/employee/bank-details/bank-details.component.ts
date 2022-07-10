import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  bankFormGroup!: FormGroup;
  @Input() empDataById : any;
  constructor(private _formBuilder: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.bankFormGroup = this._formBuilder.group({
      // accnoCtrl: new FormControl('', [Validators.required, Validators.pattern("^\d{9,18}$")]),
      // ifscCtrl: new FormControl('', [Validators.required, Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]),
      // panCtrl: new FormControl('', [Validators.required, Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),
      // adharCtrl: new FormControl('', [Validators.required, Validators.pattern("^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$")]),
      accnoCtrl: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{12}$')]),
      ifscCtrl: new FormControl('', [Validators.required, Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]),
      panCtrl: new FormControl('', [Validators.required, Validators.minLength(10)]),
      adharCtrl: new FormControl('', [Validators.required, Validators.minLength(12)]),
    });
    if(this.empDataById){
    this.bankFormGroup.patchValue({
      accnoCtrl: this.empDataById.accnoCtrl,
      ifscCtrl: this.empDataById.ifscCtrl,
      panCtrl: this.empDataById.panCtrl,
      adharCtrl: this.empDataById.adharCtrl
    });}
  }

}
