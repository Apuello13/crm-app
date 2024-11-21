import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationTreeComponent } from './observation-tree.component';

describe('ObservationTreeComponent', () => {
  let component: ObservationTreeComponent;
  let fixture: ComponentFixture<ObservationTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservationTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservationTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
