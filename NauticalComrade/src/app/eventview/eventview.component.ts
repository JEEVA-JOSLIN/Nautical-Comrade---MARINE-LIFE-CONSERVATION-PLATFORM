import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-eventview',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './eventview.component.html',
  styleUrl: './eventview.component.css'
})
export class EventviewComponent {
  events: any[]=[];
  ngOnInit(): void {
    
  }
  constructor(private http: HttpClient) { 

  }
  get()
  {
    alert("ver");
    const apiUrl = 'http://localhost:8000/user/admin/eve'; 
    this.http.get<any[]>(apiUrl).subscribe((data) => {
          this.events = data; 
    
        },
        (error) => {
          console.error('Error fetching events:', error);
        }
      );
  }

  
}
