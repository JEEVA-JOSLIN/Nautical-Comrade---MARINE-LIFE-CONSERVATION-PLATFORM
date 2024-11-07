import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userData: any;
  name:string="";
  email:string="";


  constructor(private sharedDataService: SharedDataService,private router: Router) { }

  ngOnInit(): void {
    this.userData = this.sharedDataService.getUserData();
    this.name=this.userData.name;
    this.email=this.userData.email;
  }
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
    alert("starrt");
    this.router.navigate(['/start']);
  }
}
