import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-try',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './try.component.html',
  styleUrl: './try.component.css'
})
export class TryComponent {
  userData: any;
  name:string="";
  email:string="";
    constructor(private sharedDataService: SharedDataService,private router: Router) { }
    ngOnInit(): void {
      this.userData = this.sharedDataService.getUserData();
      this.name=this.userData.name;
      this.email=this.userData.email;
    }
    



    
}
