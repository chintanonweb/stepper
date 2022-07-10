import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  [x: string]: any;

  pdetailsFormGroup!: FormGroup;
  bankFormGroup!: FormGroup;
  profFormGroup!:FormGroup;
  cstatusFormGroup!: FormGroup;
  expFormGroup!:FormGroup;
  eduFormGroup!:FormGroup;
  toppings = new FormControl();
  toppingList: string[] = ['Angular', 'React', 'Dot Net', 'Python', 'Java',];


  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    var retrievedObject:any = localStorage.getItem('employeeDetails');

    this.employee = JSON.parse(retrievedObject);

    this.expFormGroup = this._formBuilder.group({
     experience: new FormArray([this.getNewExperieceGroup()]  )
    });
    this.eduFormGroup = this._formBuilder.group({
      education: new FormArray([this.getNewEducationGroup()]  )
     });
    this.pdetailsFormGroup = this._formBuilder.group({
      fnameCtrl: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lnameCtrl: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dobCtrl: new FormControl('', [Validators.required]),
      phoneCtrl: new FormControl('', [Validators.required, Validators.minLength(10)]),
      emailCtrl: new FormControl('', [Validators.required, Validators.email]),
    });
    this.bankFormGroup = this._formBuilder.group({
      accnoCtrl: new FormControl('', [Validators.required, Validators.minLength(12)]),
      ifscCtrl: new FormControl('', [Validators.required, Validators.minLength(8)]),
      panCtrl: new FormControl('', [Validators.required, Validators.minLength(10)]),
      adharCtrl: new FormControl('', [Validators.required, Validators.minLength(12)]),
    });
    this.profFormGroup = this._formBuilder.group({
      yearCtrl: new FormControl('', [Validators.required]),
      monthCtrl: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
    this.cstatusFormGroup = this._formBuilder.group({
      companyCtrl: new FormControl('', [Validators.required]),
      desigCtrl: new FormControl('', [Validators.required]),
      deptCtrl: new FormControl('', [Validators.required]),
      wdateCtrl: new FormControl('', [Validators.required]),
      ctcCtrl: new FormControl('', [Validators.required]),
    });
    
  } 
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  } 



  onSubmit(){
    
    const requestBody ={
    pdetailsData : this.pdetailsFormGroup.value,
    bankData : this.bankFormGroup.value,
    profData : this.profFormGroup.value,
    cstatusData : this.cstatusFormGroup.value,
    expData : this.expFormGroup.value,
    eduData : this.eduFormGroup.value
    }
    localStorage.setItem('employeeDetails',JSON.stringify(requestBody))
    console.log(JSON.stringify(requestBody))
  }

  get experience(){
    return this.expFormGroup.get('experience') as FormArray;
  }
  addExperience(){
    this.experience.push(this.getNewExperieceGroup());
    console.log(this.expFormGroup.value);
  }

  getNewExperieceGroup(){
    return new FormGroup({companyCtrl: new FormControl('', [Validators.required]),
    desigCtrl: new FormControl('', [Validators.required]),
    deptCtrl: new FormControl('', [Validators.required]),
    wdateCtrl: new FormControl('', [Validators.required]),
    tdateCtrl: new FormControl('', [Validators.required]),
    ctcCtrl: new FormControl('', [Validators.required]),});
  }

  get education(){
    return this.eduFormGroup.get('education') as FormArray;
  }
  addEducation(){
    this.education.push(this.getNewEducationGroup());
    console.log(this.eduFormGroup.value);
  }

  getNewEducationGroup(){
    return new FormGroup({
      courseCtrl: new FormControl('', [Validators.required]),
      passCtrl: new FormControl('', [Validators.required]),
      toCtrl: new FormControl('', [Validators.required]),
      uniCtrl: new FormControl('', [Validators.required]),
      gradeCtrl: new FormControl('', [Validators.required]),
    });
  }

  deleteExperience(index: number){
    this.experience.removeAt(index);
  }
  deleteEducation(index: number){
    this.education.removeAt(index);
  }

}
