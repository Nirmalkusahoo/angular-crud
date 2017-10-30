import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "app/service/employee.service";
import { Employee } from "app/model/employee";
import { Router, ActivatedRoute } from "@angular/router";
import { MESSAGE } from "app/constants/message";

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  private empObj:Employee;
  public showAlertMessage:boolean=false;
  constructor(public employeeService: EmployeeService,
              private router:Router,
              private route:ActivatedRoute) {
   }

  ngOnInit(){

    this.empObj = new Employee();
    this.employeeService.copyEvent.subscribe(
      (rcvEmpObj:Employee)=>{
        this.empObj=rcvEmpObj;
      }
    )
  }

  showList(){
    this.router.navigate(['/list'],{relativeTo:this.route})
  }
public updateRecord :boolean =false;
  submit(){
    this.employeeService.empDetails.push(this.empObj);
  }

  save(updatedEmp:Employee){
    console.log("Updated Record ::"+JSON.stringify(updatedEmp));
    this.employeeService.empDetails[this.employeeService.shareIndex]=updatedEmp;
    this.employeeService.showAlertMessage=true;
    this.employeeService.alertMessage=MESSAGE.update;
  }
 
 

}
