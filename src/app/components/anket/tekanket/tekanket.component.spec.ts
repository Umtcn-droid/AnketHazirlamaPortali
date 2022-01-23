import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekanketComponent } from './tekanket.component';

describe('TekanketComponent', () => {
  let component: TekanketComponent;
  let fixture: ComponentFixture<TekanketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekanketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekanketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
