import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "app/service/employee.service";
import { Employee } from "app/model/employee";
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Employee Management';
  
  constructor(private router:Router,
              private route:ActivatedRoute){
  }
  ngOnInit(){
    this.router.navigate(['/form'],{relativeTo:this.route})
  }
}
