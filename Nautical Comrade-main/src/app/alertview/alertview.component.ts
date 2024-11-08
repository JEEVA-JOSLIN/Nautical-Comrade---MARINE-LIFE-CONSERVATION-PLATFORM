import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alertview',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './alertview.component.html',
  styleUrl: './alertview.component.css'
})
export class AlertviewComponent {

  alerts: any[]=[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8000/user/viewalert').subscribe(alerts => {
      this.alerts = alerts;
  
    });
  }

}
