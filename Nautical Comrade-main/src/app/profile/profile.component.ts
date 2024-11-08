import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HttpClientModule,FormsModule,RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userData: any;
  name:string="";
  email:string="";

  ngOnInit(): void {
    this.userData = this.sharedDataService.getUserData();
    this.name=this.userData.name;
    this.email=this.userData.email;
  }

  constructor(private sharedDataService: SharedDataService,private router: Router) { }
  logout()
  {
    this.router.navigate(['']);
  }
  viewEvents() {
    // Navigate to the view events page
    this.router.navigate(['/events']);
  }

  startEvent() {
    // Navigate to the start event page
    this.router.navigate(['/start']);
  
  }


  viewAlert()
  {
    this.router.navigate(['/alertview']);
  }
}
