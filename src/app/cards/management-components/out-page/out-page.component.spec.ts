import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutPageComponent } from './out-page.component';

describe('OutPageComponent', () => {
  let component: OutPageComponent;
  let fixture: ComponentFixture<OutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
