import { EduDetailsComponent } from './edu-details/edu-details.component';
import { ExpDetailsComponent } from './exp-details/exp-details.component';
import { CstatusComponent } from './cstatus/cstatus.component';
import { ProfDetailsComponent } from './prof-details/prof-details.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { PdetailsComponent } from './pdetails/pdetails.component';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements AfterViewInit {
  pdetailsFormGroup!: FormGroup;
  bankFormGroup!: FormGroup;
  profFormGroup!: FormGroup;
  cstatusFormGroup!: FormGroup;
  expFormGroup!: FormGroup;
  eduFormGroup!: FormGroup;
  employeeDetailById: any;
  @ViewChild('stepOne') public stepOneComponent!: PdetailsComponent;
  @ViewChild('stepTwo') public stepTwoComponent!: BankDetailsComponent;
  @ViewChild('stepThree') public stepThreeComponent!: ProfDetailsComponent;
  @ViewChild('stepFour') public stepFourComponent!: CstatusComponent;
  @ViewChild('stepFive') public stepFiveComponent!: ExpDetailsComponent;
  @ViewChild('stepSix') public stepSixComponent!: EduDetailsComponent;
  selected = 0;
  id: any;

  constructor(private cdr: ChangeDetectorRef, private router: Router,
    private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar
    , private employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.employeeDetailById = this.employeeService.getEmployeeDetailsById(this.id);
      }
    });
  }

  ngAfterViewInit() {
    this.pdetailsFormGroup = this.stepOneComponent.pdetailsFormGroup;
    this.bankFormGroup = this.stepTwoComponent.bankFormGroup;
    this.profFormGroup = this.stepThreeComponent.profFormGroup;
    this.cstatusFormGroup = this.stepFourComponent.cstatusFormGroup;
    this.expFormGroup = this.stepFiveComponent.expFormGroup;
    this.eduFormGroup = this.stepSixComponent.eduFormGroup;
    this.cdr.detectChanges();
  }

  onSubmit() {
    const requestBody = this.setRequestObj();
    if (!this.id) {
      this.employeeService.addEmployee(requestBody);
    } else {
      this.employeeService.updateEmployee(this.id, requestBody);
    }
    this.router.navigateByUrl('/list');
    this.snackBar.open(!this.id ? 'Added Successfully' : 'Updated Successfully', 'Close', {
      duration: 4000
    });
  }

  delete() {
    // delete index id data from local storage
    this.employeeService.deleteEmployee(this.id);
    this.router.navigateByUrl('/list');
    this.snackBar.open('Deleted Successfully', 'Close', {
      duration: 4000
    });
  }

  setRequestObj() {
    return {
      pdetailsData: this.pdetailsFormGroup.value,
      bankData: this.bankFormGroup.value,
      profData: this.profFormGroup.value,
      cstatusData: this.cstatusFormGroup.value,
      expData: this.expFormGroup.value,
      eduData: this.eduFormGroup.value
    }
  }
  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  goForward(stepper: MatStepper) {
    stepper.next();
  }

  listPage() {
    this.router.navigate(['list']);
  }

  // submit(){
  //   this.stepOneComponent.onSubmit();
  // }

  selectionChange(event: any) {
    this.selected = event.selectedIndex;
  }

}
