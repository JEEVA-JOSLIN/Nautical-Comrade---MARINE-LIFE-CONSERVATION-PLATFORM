import { Component } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
  users: any[] = [];
  filteredUsers: any[] = [];
  states: string[] = []; // Assuming you have an array of states
  districts: string[] = []; // Assuming you have an array of districts
  sortBy: string = 'name';
  filterState: string = '';
  filterDistrict: string = '';
  searchEmail: string = '';
  ngOnInit(): void {
    const apiUrl = 'http://localhost:8000/user/admin/userl'; 
    this.http.get<any[]>(apiUrl).subscribe((data) => {
          this.filteredUsers = data; 
          this.users=this.filteredUsers;
       
          this.extractStatesAndDistricts();
    
        },
        (error) => {
          console.error('Error fetching events:', error);
        }
      );
    
  }
  constructor(private http: HttpClient) { 

  }
  get()
  {
    const apiUrl = 'http://localhost:8000/user/admin/userl'; 
    this.http.get<any[]>(apiUrl).subscribe((data) => {
          this.filteredUsers = data; 
          this.users=this.filteredUsers;
       
          this.extractStatesAndDistricts();
    
        },
        (error) => {
          console.error('Error fetching events:', error);
        }
      );
  }
  extractStatesAndDistricts() {
    // Extract states and districts from users data
    this.states = Array.from(new Set(this.users.map(user => user.state)));
    this.districts = Array.from(new Set(this.users.map(user => user.district)));
  }
  sort(field: string) {
    this.filteredUsers.sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });
    if (field !== this.sortBy) {
      this.sortBy = field;
    }
  }

  applyFilters() {
    this.filteredUsers = this.users.filter(user => {
      let stateMatch = true;
      let districtMatch = true;
      let emailMatch = true;

      if (this.filterState) {
        stateMatch = user.state === this.filterState;
      }
      if (this.filterDistrict) {
        districtMatch = user.district === this.filterDistrict;
      }
      if (this.searchEmail) {
        emailMatch = user.email.toLowerCase().includes(this.searchEmail.toLowerCase());
      }

      return stateMatch && districtMatch && emailMatch;
    });
  }

  
}
