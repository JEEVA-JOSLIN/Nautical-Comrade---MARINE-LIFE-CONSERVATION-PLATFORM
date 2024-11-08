
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [],
  templateUrl: './species.component.html',
  styleUrl: './species.component.css'
})
export class SpeciesComponent {
  endangeredSpecies = [
    {
      name: 'Blue Whale',
      description: 'The blue whale is the largest animal known to have ever existed, and they are listed as endangered species.',
      link: 'https://www.google.com/search?q=Blue+Whale&tbm=isch'
    },
    // Add more species objects here...
  ];
}

