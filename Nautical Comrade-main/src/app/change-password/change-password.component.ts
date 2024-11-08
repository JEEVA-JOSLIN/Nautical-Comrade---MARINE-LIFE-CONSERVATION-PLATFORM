import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  standalone: true,
  imports: [HttpClientModule,FormsModule,RouterModule],
})
export class ChangePasswordComponent {
  name: string="";
  email: string="";
  newPassword: string="";
  confirmPassword: string="";
  ngOnInit(): void{
      
  }

  constructor(private http: HttpClient, private router: Router) { }

  changePassword() {
    let datap = {
      name: this.name,
      email: this.email,
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword
    };
    alert("cew");
    this.http.post("http://localhost:8000/user/change",datap).subscribe((resultData: any)=>
      {
          alert(resultData.message);
          // Redirect to login page after successful password change
          this.router.navigate(['/login']);
        }
      );
     
  }
}
