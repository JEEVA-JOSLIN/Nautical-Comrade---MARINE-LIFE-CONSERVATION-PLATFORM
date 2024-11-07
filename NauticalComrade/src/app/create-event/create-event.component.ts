// create-event.component.ts

import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [HttpClientModule,FormsModule,RouterModule],
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  userData:any;
  username: string="";
  email: string="";
  eventName: string="";
  location: string="";
  date: Date=new Date();
  time: string = "";
  ngOnInit(): void {
    this.userData = this.sharedDataService.getUserData();
    this.username=this.userData.name;
    this.email=this.userData.email;
  }
  constructor(private sharedDataService: SharedDataService,private http:HttpClient,private route: ActivatedRoute,
    private router: Router) { }

  createEvent() {
    let bodyData={
      "eventname":this.eventName,
    "location":this.location,
    "date":this.date,
    "time":this.time
    };
    
    this.http.post("http://localhost:8000/user/createevent", bodyData).subscribe(
      (resultData: any) => {
        if (resultData.status) {
          alert(resultData.message);
          alert()
          this.router.navigate(['/profile']);
        } else {
          alert(resultData.message);
          this.router.navigate(['/register']);
        }
      },
      (error) => {
        alert(error.message);
        
      }
    );

 
    this.router.navigate(['/userprofile']);
  }
  
}
