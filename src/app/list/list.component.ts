import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  searchInput!: string;
  employeeList: any;
  employeeDelete: any;
  id: any;
  msg:any;
  constructor(private snackBar: MatSnackBar
    , private employeeService: EmployeeService, private router: Router) {  }

  ngOnInit(): void {
    const retrievedObject: any = localStorage.getItem('employeeDetails');
    this.employeeList = JSON.parse(retrievedObject);
  }

  onSearchCustomer(event: any) {
    console.log(event.target.value);
  }
  delete() {
    // delete index id data from local storage
    this.employeeService.deleteEmployee(this.id);
    this.router.navigateByUrl('/list');
    this.snackBar.open('Deleted Successfully', 'Close', {
      duration: 4000
    });
  }
}
