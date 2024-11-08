import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemeventComponent } from './remevent.component';

describe('RemeventComponent', () => {
  let component: RemeventComponent;
  let fixture: ComponentFixture<RemeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemeventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
