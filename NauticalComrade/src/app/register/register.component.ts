import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  aarray: any[]=[];
  currentID="";
    name: string="";
    email : string="";
    password : string ="";
    cpassword: string="";

    ngOnInit(): void{


    }
    
    constructor(private http:HttpClient,private route: ActivatedRoute,
      private router: Router)
    {
      
    }
   
    
    /*getAll()
    {
      this.http.get("http://localhost:9001/user/getALL").subscribe((resultData: any)=>
      {
        console.log(resultData);
        this.array = resultData.data;

      });

    }*/


    register()
    {
      alert("efbw")
      
      let bodyData={
        "name":this.name,
      "email":this.email,
      "password":this.password
      };
      if(this.name.length<1||this.email.length<1)
        {
          alert("Enter all the fields");
          return;
        }
      if(this.password.length<6)
      {
        alert("Password should contain minimum 6 characters");
        this.password = "";
        this.cpassword="";
        return
      }
      if(this.cpassword!=this.password)
        {
            alert("Password Mismatch");
            this.password = "";
            this.cpassword="";
            return;
            
        }
      
      this.http.post("http://localhost:8000/user/create", bodyData).subscribe(
        (resultData: any) => {
          if (resultData.status) {
            // User registered successfully
            alert(resultData.message);
            this.email = "";
            this.password = "";
            this.name = "";
            this.router.navigate(['/login']);
          } else {
            // Error occurred during registration
            alert(resultData.message);
            this.email = "";

          }
        },
        (error) => {
          // Error occurred while communicating with the server
          alert(error.message);
          
        }
      );
        
    }
}