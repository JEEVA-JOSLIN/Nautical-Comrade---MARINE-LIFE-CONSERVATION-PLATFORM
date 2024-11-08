import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leader',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './leader.component.html',
  styleUrl: './leader.component.css'
})
export class LeaderComponent {

  topParticipants: any[]=[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTopParticipants();
  }

  loadTopParticipants() {
    this.http.get<any[]>('http://localhost:8000/user/leader').subscribe(participants => {
    
      const participantsWithEventsCount = participants.map(participant => {
        return {
          name: participant.name,
          events: participant.events || []
        };
      });
      this.topParticipants = participantsWithEventsCount.sort((a, b) => b.events.length - a.events.length).slice(0, 3);
    },
    error => {
      console.error('Error fetching participants:', error); // Log error
    }
  );
  }
}
