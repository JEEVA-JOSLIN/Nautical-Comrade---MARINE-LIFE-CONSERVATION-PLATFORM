import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-eventview',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,RouterModule],
  templateUrl: './eventview.component.html',
  styleUrl: './eventview.component.css'
})
export class EventviewComponent {
  events: any[]=[];
  userData: any;
  name:string="";
  email:string="";
  

  ngOnInit(): void {
    this.userData = this.sharedDataService.getUserData();
    this.name=this.userData.name;
        const apiUrl = 'http://localhost:8000/user/admin/eve'; 
    this.http.get<any[]>(apiUrl).subscribe((data) => {
          this.events = data; 
    
        },
        (error) => {
          console.error('Error fetching events:', error);
        }
      );
    
  }
  constructor(private http: HttpClient,private sharedDataService: SharedDataService) { 

  }
  get()
  {
    
    const apiUrl = 'http://localhost:8000/user/admin/eve'; 
    this.http.get<any[]>(apiUrl).subscribe((data) => {
          this.events = data; 
        },
        (error) => {
          console.error('Error fetching events:', error);
        }
      );
  }

  joinOrUnjoin(eventId: string, isJoined: boolean) {
    this.userData = this.sharedDataService.getUserData();
    this.name=this.userData.name;
    
    alert("AJSN")
    const action = isJoined ? 'unjoin' : 'join';
    const bodyData = { eventId, action, currentUser: this.name };
    this.http.post("http://localhost:8000/user/updateParticipants", bodyData).subscribe((resultData: any) => {
      if (resultData.success) {
        alert(resultData.message);
        this.get();
      } else {
        alert(resultData.message); // Show error message if any
      }
    });
  }

  
}
