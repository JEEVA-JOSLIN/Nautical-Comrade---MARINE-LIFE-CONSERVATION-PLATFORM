import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [HttpClientModule,FormsModule,RouterModule,CommonModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  userData:any;
  username: string="";
  email: string="";
  eventName: string="";
  date: Date=new Date();
  time: string = "";
  beach:string="";
  location:string="";
  selectedState: string="";
  selectedBeach: string="";
  beaches: string[]=[];
  state:string="";
  ngOnInit(): void {
    this.userData = this.sharedDataService.getUserData();
    this.username=this.userData.name;
    this.email=this.userData.email;
    // Define beach names for each district
    interface DistrictBeachesMap {
      [key: string]: string[];
    }
  
}
constructor(private sharedDataService: SharedDataService,private http:HttpClient,private route: ActivatedRoute,
  private router: Router) { }

  onStateChange() {
    // Define districts for each state
    interface DistrictBeachesMap {
      [key: string]: string[];
    }
    const  stateDistrictMap: DistrictBeachesMap= {
      
      'Andaman and Nicobar Islands': ['Radhanagar Beach', 'Laxmanpur Beach', 'Corbyn\'s Cove Beach'],
      'Andhra Pradesh': ['Rushikonda Beach', 'Rama Krishna Beach', 'Yarada Beach'],
      'Arunachal Pradesh': ['Mehao Lake', 'Malinithan', 'Ganga Lake'],
      'Assam': ['Bogamati', 'Sualkuchi', 'Manas National Park'],
      'Bihar': ['Gandhi Ghat', 'Naukuchiatal', 'Bihar Beach'],
      'Chandigarh (UT)': ['Sukhna Lake', 'Rock Garden', 'Zakir Hussain Rose Garden'],
      'Chhattisgarh': ['Kanger Ghati National Park', 'Amrit Dhara Waterfall', 'Gadiya Mountain'],
      'Dadra and Nagar Haveli and Daman and Diu (UT)': ['Devka Beach', 'Jampore Beach', 'Diu Fort'],
      'Delhi (NCT)': ['India Gate', 'Lotus Temple', 'Humayun\'s Tomb'],
      'Goa': ['Calangute Beach', 'Baga Beach', 'Anjuna Beach'],
      'Gujarat': ['Dwarka Beach', 'Mandvi Beach', 'Somnath Beach'],
      'Haryana': ['Damdama Lake', 'Karna Lake', 'Brahma Sarovar'],
      'Himachal Pradesh': ['Kasol', 'Dalhousie', 'Kufri'],
      'Jammu and Kashmir': ['Dal Lake', 'Gulmarg', 'Sonamarg'],
      'Jharkhand': ['Dimna Lake', 'Jonha Falls', 'Hundru Falls'],
      'Karnataka': ['Gokarna Beach', 'Udupi Beach', 'Murudeshwara Beach'],
      'Kerala': ['Kovalam Beach', 'Varkala Beach', 'Marari Beach'],
      'Ladakh (UT)': ['Pangong Lake', 'Tso Moriri', 'Hemis Monastery'],
      'Lakshadweep (UT)': ['Agatti Island', 'Kavaratti Island', 'Minicoy Island'],
      'Madhya Pradesh': ['Bhimkund Waterfall', 'Dhuandhar Falls', 'Orchha Fort'],
      'Maharashtra': ['Alibaug Beach', 'Kashid Beach', 'Ganpatipule Beach'],
      'Manipur': ['Loktak Lake', 'Imphal Valley', 'Keibul Lamjao National Park'],
      'Meghalaya': ['Umiam Lake', 'Living Root Bridges', 'Shillong Peak'],
      'Mizoram': ['Vantawng Falls', 'Palak Lake', 'Reiek Tlang'],
      'Nagaland': ['Dzukou Valley', 'Kohima War Cemetery', 'Ntangki National Park'],
      'Odisha': ['Puri Beach', 'Chandipur Beach', 'Gopalpur Beach'],
      'Puducherry (UT)': ['Paradise Beach', 'Promenade Beach', 'Auroville Beach'],
      'Punjab': ['Sukhna Lake', 'Jallianwala Bagh', 'Golden Temple'],
      'Rajasthan': ['Jaisalmer Desert', 'Jaipur City Palace', 'Pushkar Lake'],
      'Sikkim': ['Tsomgo Lake', 'Nathula Pass', 'Gurudongmar Lake'],
      'Tamil Nadu': ['Marina Beach', 'Kanyakumari Beach', 'Elliot\'s Beach'],
      'Telangana': ['Hussain Sagar Lake', 'Ramoji Film City', 'Golkonda Fort'],
      'Tripura': ['Neermahal Palace', 'Unakoti Hills', 'Sepahijala Wildlife Sanctuary'],
      'Uttar Pradesh': ['Taj Mahal', 'Varanasi Ghats', 'Lucknow Residency'],
      'Uttarakhand': ['Nainital Lake', 'Valley of Flowers', 'Jim Corbett National Park'],
      'West Bengal': ['Sundarbans', 'Digha Beach', 'Darjeeling Himalayan Railway']
    };

    // Get selected state and its corresponding districts
    this.beaches = stateDistrictMap[this.state];
  }


  createEvent() {
    let bodyData={
      "Organizer":this.username,
      "Email":this.email,
      "eventname":this.eventName,
      "date":this.date,
      "time":this.time,
      "state":this.state,
      "beach":this.beach
    };
    
    this.http.post("http://localhost:8000/user/createevent", bodyData).subscribe(
      (resultData: any) => {
        if (resultData.status) {
          alert(resultData.message);
          this.router.navigate(['/profile']);
        } else {
          alert(resultData.message);
          this.router.navigate(['/profile']);
        }
      },
      (error) => {
        alert(error.message);
        
      }
    );

 
    this.router.navigate(['/profile']);
  }
}