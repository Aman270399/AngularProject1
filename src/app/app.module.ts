import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { GenderpipePipe } from './pipes/genderpipe.pipe';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';

import { AddUserComponent } from './components/add-user/add-user.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';

  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    EmployeeComponent,
    GenderpipePipe,
    EmployeelistComponent,
    ReactiveFormComponent,
    UserComponent,
   
    AddUserComponent,
   
    NgclassdemoComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
