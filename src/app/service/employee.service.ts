import { Injectable, EventEmitter } from '@angular/core';
import { Employee } from "app/model/employee";

@Injectable()
export class EmployeeService {

  copyEvent=new EventEmitter<Employee>();
  enableButton:boolean=false;
  shareIndex: number;
  showAlertMessage:boolean=false;
  public alertMessage:string;
  

  empDetails:Employee[]=
   [{ 
    firstName: "Romin",
    lastName: "Irani",
    email: "romin.k.irani@forthcode.com",
    age: 37,
    gender: "Male",
    dob: "2017-10-03",
   },
   { 
    firstName: "Tom",
    lastName: "Hanks",
    email: "tomhanks@forthcode.com",
    age: 42,
    gender: "Male",
    dob: "2017-10-03"
   },
   { 
    firstName: "Neil",
    lastName: "Irani",
    email: "neilrirani@forthcode.com",
    age: 32,
    gender: "Female",
    dob: "2017-10-03"
   }
  ]

}
