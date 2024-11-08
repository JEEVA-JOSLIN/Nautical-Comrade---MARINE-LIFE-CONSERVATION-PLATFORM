import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-raise',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './raise.component.html',
  styleUrl: './raise.component.css'
})
export class RaiseComponent {

  inquiryType: string = 'complaint';
  subject: string = '';
  message: string = '';
  email:string="";

  constructor(private http: HttpClient) { }

  submitForm() {
    // Here you can handle the submission of the complaint or question
    console.log('Type:', this.inquiryType);
    console.log('Subject:', this.subject);
    console.log('Message:', this.message);
    const alertData = {
      subject: this.subject,
      message: this.message,
      type:this.inquiryType
    };

    // Assuming you have an API endpoint to store alert data in the database
    this.http.post("http://localhost:8000/user/raise", alertData).subscribe((resultData: any) => {
      if (resultData.status) {
        alert("Complaint sent successfully!We'll catch you soon");
        // Reset form fields after sending alert
        this.subject = '';
        this.message = '';
      } else {
        alert("Failed to send alert: " + resultData.message);
      }
    });
  
    this.resetForm();
  }

  resetForm() {
    this.inquiryType = 'complaint';
    this.subject = '';
    this.message = '';
  }
}
