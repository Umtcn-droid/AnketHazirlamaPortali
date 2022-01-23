import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonucComponent } from './sonuc.component';

describe('SonucComponent', () => {
  let component: SonucComponent;
  let fixture: ComponentFixture<SonucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
