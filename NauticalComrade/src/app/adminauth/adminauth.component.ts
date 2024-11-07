import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-adminauth',
  standalone: true,
  imports: [HttpClientModule,FormsModule],
  templateUrl: './adminauth.component.html',
  styleUrls: ['./adminauth.component.css']
})
export class AdminauthComponent {
  array: any[]=[];
  currentID="";
  email : string="";
  password : string ="";
  ngOnInit(): void{
      
  }

  constructor(private http:HttpClient,private route: ActivatedRoute,
    private router: Router)
  {
  }
  admlog()
  {
    let bodyData={
    "email":this.email,
    "password":this.password
    };
      this.http.post("http://localhost:8000/user/admin",bodyData).subscribe((resultData: any)=>
        {
          alert(resultData.message);
          alert("Entering admin portal as " + this.email);
          this.router.navigate(['/admin']);
          this.email="";
          this.password="";
    
        }
      );     
  }
}
