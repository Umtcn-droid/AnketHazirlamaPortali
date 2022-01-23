import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekanketjoinComponent } from './tekanketjoin.component';

describe('TekanketjoinComponent', () => {
  let component: TekanketjoinComponent;
  let fixture: ComponentFixture<TekanketjoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekanketjoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekanketjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
