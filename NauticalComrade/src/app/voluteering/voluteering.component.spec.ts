import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluteeringComponent } from './voluteering.component';

describe('VoluteeringComponent', () => {
  let component: VoluteeringComponent;
  let fixture: ComponentFixture<VoluteeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoluteeringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoluteeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
