import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

    getEmployeeDetails(){
      return  JSON.parse(localStorage.getItem('employeeDetails') || '[]') ;
    }

    getEmployeeDetailsById(id: string | number){
      const allEmployeeData = this.getEmployeeDetails();
      return allEmployeeData[id];
    }

    addEmployee(employeeData:any){
      const employeeDetails = this.getEmployeeDetails();
      employeeDetails.push(employeeData);
      localStorage.setItem('employeeDetails', JSON.stringify(employeeDetails))
    }

    updateEmployee(id:string| number,employeeData:any){
      const employeeDetails = this.getEmployeeDetails();
      if(employeeDetails[id]){
        employeeDetails[id] = employeeData;
        localStorage.setItem('employeeDetails', JSON.stringify(employeeDetails))
      }
    }

    deleteEmployee(id:string | number){
      const emplyeeDetails = this.getEmployeeDetails();
      emplyeeDetails.splice(emplyeeDetails[id], 1);
      localStorage.setItem('employeeDetails',JSON.stringify([...emplyeeDetails]));
    }
}
