import { Component, OnInit, EventEmitter } from '@angular/core';
import { EmployeeService } from "app/service/employee.service";
import { Employee } from "app/model/employee";
import { MESSAGE } from "app/constants/message";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  private myEmployees: Employee[];
  
  ngOnInit() {
    this.myEmployees = this.employeeService.empDetails;
    console.log(this.myEmployees);
  }
   update(passedEmployee:Employee,index){
    this.employeeService.enableButton=true;
    this.employeeService.shareIndex = index;
    this.employeeService.copyEvent.emit(passedEmployee);
    console.log("Previos data::"+JSON.stringify(passedEmployee));
  }

  delete(index){
    this.employeeService.empDetails.splice(index, 1);
    this.employeeService.alertMessage=MESSAGE.deleted 
   }

}
