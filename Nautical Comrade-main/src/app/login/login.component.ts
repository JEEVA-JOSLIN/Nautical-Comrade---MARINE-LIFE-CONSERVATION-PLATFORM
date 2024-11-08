import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule,FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  array: any[]=[];
  currentID="";
  email : string="";
  name: string="";
  password : string ="";

  ngOnInit(): void{
      
  }
  constructor(private http:HttpClient,private route: ActivatedRoute,
    private router: Router,private sharedDataService: SharedDataService)
  {
  }
  login()
  {
    let bodyData={
    "email":this.email,
    "password":this.password
    };
    if(this.email.length<1)
      {
        alert("Enter all the fields");
        return;
      }

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
}
