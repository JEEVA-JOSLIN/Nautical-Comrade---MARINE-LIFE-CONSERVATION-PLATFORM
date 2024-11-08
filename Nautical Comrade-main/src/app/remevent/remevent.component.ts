import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-remevent',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,RouterModule],
  templateUrl: './remevent.component.html',
  styleUrl: './remevent.component.css'
})
export class RemeventComponent {
  users: any[]=[]; // Define users array to store user data
  events: any[]=[];
  constructor(private http: HttpClient,private router: Router) {}
  ngOnInit(): void {
  
   const apiUrl = 'http://localhost:8000/user/admin/eve'; 
    this.http.get<any[]>(apiUrl).subscribe((data) => {
          
          this.events = data; 
    
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );
    
  }
  get()
  {
    const apiUrl = 'http://localhost:8000/user/admin/get'; 
    this.http.get<any[]>(apiUrl).subscribe((data) => {
          
          this.users = data; 
    
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      )
    
  }
  removeUser(userId: string): void {
    this.http.delete(`http://localhost:8000/user/remove/${userId}`)
      .subscribe(
        () => {
          alert('User removed successfully');
          this.get();
        },
        (error) => {
          alert('Error removing user: ' + error);
        }
      );
  }
  removeEvent(userId: string): void {
    this.http.delete(`http://localhost:8000/user/removeeve/${userId}`)
      .subscribe(
        () => {
          alert('Event removed successfully');
          this.eve();
        },
        (error) => {
          alert('Error removing event: ' + error);
        }
      );
  }
  eve()
  {
    this.router.navigate(['/adevent']);
   const apiUrl = 'http://localhost:8000/user/admin/eve'; 
    this.http.get<any[]>(apiUrl).subscribe((data) => {
          
          this.events = data; 
    
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );
  }
  use()
  {
    this.router.navigate(['/userlist']);
  }
}
