import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-adevent',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './adevent.component.html',
  styleUrl: './adevent.component.css'
})
export class AdeventComponent {
  events: any[] = [];
  filteredEvents: any[] = [];
  states: string[] = [];
  beaches: string[] = [];
  sortBy: string = 'eventname';
  filterState: string = '';
  filterBeach: string = '';
  searchOrganizer: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    // Assuming you have an API endpoint to fetch events data
    const apiUrl = 'http://localhost:8000/user/admin/eve'; 
    this.http.get<any[]>(apiUrl).subscribe((data) => {
          this.events = data; 
          this.filteredEvents = this.events;
          this.extractStatesAndBeaches();
    
        },
        (error) => {
          console.error('Error fetching events:', error);
        }
      );
  }

  extractStatesAndBeaches() {
    this.states = Array.from(new Set(this.events.map(event => event.state)));
    this.beaches = Array.from(new Set(this.events.map(event => event.beach)));
  }

  applyFilters() {
    this.filteredEvents = this.events.filter(event => {
      let stateMatch = true;
      let beachMatch = true;
      let organizerMatch = true;

      if (this.filterState) {
        stateMatch = event.state === this.filterState;
      }
      if (this.filterBeach) {
        beachMatch = event.beach === this.filterBeach;
      }
      if (this.searchOrganizer) {
        organizerMatch = event.organizer.toLowerCase().includes(this.searchOrganizer.toLowerCase());
      }

      return stateMatch && beachMatch && organizerMatch;
    });
  }

  sort() {
    this.filteredEvents.sort((a, b) => {
      if (a[this.sortBy] < b[this.sortBy]) return -1;
      if (a[this.sortBy] > b[this.sortBy]) return 1;
      return 0;
    });
  }
}
