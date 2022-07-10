import { SearchPipe } from './search.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { EmployeeComponent } from './employee/employee.component';
import { PdetailsComponent } from './employee/pdetails/pdetails.component';
import { BankDetailsComponent } from './employee/bank-details/bank-details.component';
import { ProfDetailsComponent } from './employee/prof-details/prof-details.component';
import { CstatusComponent } from './employee/cstatus/cstatus.component';
import { ExpDetailsComponent } from './employee/exp-details/exp-details.component';
import { EduDetailsComponent } from './employee/edu-details/edu-details.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBarModule} from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    EmployeeComponent,
    PdetailsComponent,
    BankDetailsComponent,
    ProfDetailsComponent,
    CstatusComponent,
    ExpDetailsComponent,
    EduDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSelectModule,
    MatIconModule,
    NgbModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
