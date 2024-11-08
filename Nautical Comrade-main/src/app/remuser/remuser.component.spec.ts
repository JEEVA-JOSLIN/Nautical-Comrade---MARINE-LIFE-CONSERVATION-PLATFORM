import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemuserComponent } from './remuser.component';

describe('RemuserComponent', () => {
  let component: RemuserComponent;
  let fixture: ComponentFixture<RemuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
