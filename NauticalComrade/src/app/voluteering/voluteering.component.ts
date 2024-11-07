import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-voluteering',
  standalone: true,
  imports: [HttpClientModule,BrowserModule,FormsModule],
  templateUrl: './voluteering.component.html',
  styleUrl: './voluteering.component.css'
})
export class VoluteeringComponent {
  complaint = {
    subject: '',
    message: '',
    image: null as File | null  // Specify the type of 'image' as 'File | null'
};
 ngOnInit()
{

}

constructor(private http: HttpClient) { }

submitComplaint() {
    const formData = new FormData();
    formData.append('subject', this.complaint.subject);
    formData.append('message', this.complaint.message);
    if (this.complaint.image !== null) {  // Check if 'image' is not null before appending
        formData.append('image', this.complaint.image);
    }

    this.http.post<any>('http://localhost:8000/saveComplaint', formData).subscribe(
        (response) => {
            console.log(response);
            // Reset the form after successful submission
            this.complaint = {
                subject: '',
                message: '',
                image: null
            };
        },
        (error) => {
            console.error(error);
        }
    );
}

onFileSelected(event: Event) {  // Specify the type of 'event'
    const target = event.target as HTMLInputElement;
    if (target.files !== null && target.files.length > 0) {
        this.complaint.image = target.files[0];
    }
}

}
