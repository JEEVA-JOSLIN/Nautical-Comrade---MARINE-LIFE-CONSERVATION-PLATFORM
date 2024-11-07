import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-adevent',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './adevent.component.html',
  styleUrl: './adevent.component.css'
})
export class AdeventComponent {
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
