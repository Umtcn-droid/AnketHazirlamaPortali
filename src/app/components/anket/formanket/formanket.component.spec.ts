import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormanketComponent } from './formanket.component';

describe('FormanketComponent', () => {
  let component: FormanketComponent;
  let fixture: ComponentFixture<FormanketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormanketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormanketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
