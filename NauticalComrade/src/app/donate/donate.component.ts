import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [HttpClientModule,FormsModule,RouterModule],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {
  email : string="";
  password : string ="";
  name:string="";
  login()
  {
    let bodyData={
      "email":this.email,
      "password":this.password
      };
     
  
      this.http.post("http://localhost:8000/user/findName",bodyData).subscribe((resultData: any)=>
        {
          this.name=resultData.message;
        }
      );  
        this.http.post("http://localhost:8000/user/log",bodyData).subscribe((resultData: any)=>
          {
  
            alert(resultData.message);
            const userData ={"email":this.email,"name":this.name};
            this.sharedDataService.setUserData(userData);
            alert("Logging in as " + this.name);
            this.router.navigate(['/profile']);
            this.email="";
            this.password="";
      
          }
        );     
    }
  ngOnInit(): void{
   
  }
  constructor(private http:HttpClient,private route: ActivatedRoute,
    private router: Router,private sharedDataService: SharedDataService)
  {
  }
 

}  
