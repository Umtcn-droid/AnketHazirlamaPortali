import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyconfirmdialogComponent } from './surveyconfirmdialog.component';

describe('SurveyconfirmdialogComponent', () => {
  let component: SurveyconfirmdialogComponent;
  let fixture: ComponentFixture<SurveyconfirmdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyconfirmdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyconfirmdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
