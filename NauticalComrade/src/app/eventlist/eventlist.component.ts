import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventlist',
  standalone: true,
  imports: [HttpClientModule,BrowserModule,RouterModule,FormsModule,CommonModule],
  templateUrl: './eventlist.component.html',
  styleUrl: './eventlist.component.css'
})
export class EventlistComponent {
  events: any[]=[];

  constructor(private http: HttpClient,private route: ActivatedRoute,
    private router: Router) { 

  }
  ngOnInit(): void {
    
  }
  
  get()
  {
    const apiUrl = 'http://localhost:8000/user/admin/get'; 
    this.http.get<any[]>(apiUrl).subscribe((data) => {
          
          this.events = data; 
    
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );
  }

}
