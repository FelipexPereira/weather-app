import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheaterHomeComponent } from './wheater-home.component';

describe('WheaterHomeComponent', () => {
  let component: WheaterHomeComponent;
  let fixture: ComponentFixture<WheaterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheaterHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheaterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
