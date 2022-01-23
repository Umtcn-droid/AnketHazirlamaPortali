import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormanketjoinComponent } from './formanketjoin.component';

describe('FormanketjoinComponent', () => {
  let component: FormanketjoinComponent;
  let fixture: ComponentFixture<FormanketjoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormanketjoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormanketjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
