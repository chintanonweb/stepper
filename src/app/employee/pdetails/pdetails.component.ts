import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pdetails',
  templateUrl: './pdetails.component.html',
  styleUrls: ['./pdetails.component.css']
})
export class PdetailsComponent implements OnInit {

  pdetailsFormGroup!: FormGroup;
  srcResult: any;
  @Input() empDataById : any;

constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.pdetailsFormGroup = this._formBuilder.group({
      imgCtrl: new FormControl(''),
      fnameCtrl: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lnameCtrl: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dobCtrl: new FormControl('', [Validators.required]),
      phoneCtrl: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      emailCtrl: new FormControl('', [Validators.required, Validators.email]),
    })
    
    if(this.empDataById){
      this.pdetailsFormGroup.patchValue({
        imgCtrl: this.empDataById.imgCtrl,
        fnameCtrl: this.empDataById.fnameCtrl,
        lnameCtrl: this.empDataById.lnameCtrl,
        dobCtrl: this.empDataById.dobCtrl,
        phoneCtrl: this.empDataById.phoneCtrl,
        emailCtrl: this.empDataById.emailCtrl,
      });
    }
  }

  onImageChange(e:any) {
    const reader = new FileReader();
    if(e.target.files && e.target.files.length) {
      const [imgCtrl] = e.target.files;
      reader.readAsDataURL(imgCtrl);
      reader.onload = () => {
        this.srcResult = reader.result as string;
        this.pdetailsFormGroup.patchValue({
          imgCtrl: reader.result          
        });
        console.log(imgCtrl)
      };
    }
  }
}

