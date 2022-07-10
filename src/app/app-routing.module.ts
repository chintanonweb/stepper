import { EmployeeComponent } from './employee/employee.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'list', component:ListComponent},
  {path:'add', component:EmployeeComponent},
  {path:'', component:ListComponent},
  {path:'edit/:id', component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
