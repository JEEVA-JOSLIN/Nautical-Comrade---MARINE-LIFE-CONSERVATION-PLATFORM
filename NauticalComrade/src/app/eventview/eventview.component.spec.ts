import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventviewComponent } from './eventview.component';

describe('EventviewComponent', () => {
  let component: EventviewComponent;
  let fixture: ComponentFixture<EventviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
