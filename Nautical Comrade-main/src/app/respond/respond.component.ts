import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-respond',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './respond.component.html',
  styleUrl: './respond.component.css'
})
export class RespondComponent implements OnInit {

  inquiries:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchInquiries();
  }

  fetchInquiries() {
    this.http.get<any[]>('http://localhost:8000/user/raisefetch').subscribe(
      (inquiries) => {
        this.inquiries = inquiries;
 // Copy all inquiries initially
      },
      (error) => {
        console.error('Error fetching inquiries:', error);
      }
    );
  }


}
