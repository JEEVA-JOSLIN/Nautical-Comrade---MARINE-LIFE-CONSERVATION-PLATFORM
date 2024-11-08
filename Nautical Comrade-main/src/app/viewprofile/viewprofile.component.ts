import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewprofile',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './viewprofile.component.html',
  styleUrl: './viewprofile.component.css'
})
export class ViewprofileComponent implements OnInit{
  profile: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit(): void {
  
    const userData = this.sharedDataService.getUserData();
    
    if (userData) {
      this.http.get(`http://localhost:8000/user/retprofile/${userData.email}`).subscribe(data => {
        this.profile = data;
        
      });
    }
  }






}
