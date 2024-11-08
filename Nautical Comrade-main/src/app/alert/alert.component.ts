import { Component } from '@angular/core';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [FormsModule,HttpClientModule,],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  subject: string = '';
  message: string = '';

  constructor(private http: HttpClient) { }

  sendAlert() {
    const alertData = {
      subject: this.subject,
      message: this.message
    };

    // Assuming you have an API endpoint to store alert data in the database
    this.http.post("http://localhost:8000/user/admin/sendAlert", alertData).subscribe((resultData: any) => {
      if (resultData.status) {
        alert("Alert sent successfully!");
        // Reset form fields after sending alert
        this.subject = '';
        this.message = '';
      } else {
        alert("Failed to send alert: " + resultData.message);
      }
    });
  }
}
