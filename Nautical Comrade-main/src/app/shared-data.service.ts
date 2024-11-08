// shared-data.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private userData: any;

  constructor() { }

  setUserData(data: any): void {
    this.userData = data;
  }

  getUserData(): any {
    return this.userData;
  }
}
