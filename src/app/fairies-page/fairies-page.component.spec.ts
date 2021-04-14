import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairiesPageComponent } from './fairies-page.component';

describe('FairiesPageComponent', () => {
  let component: FairiesPageComponent;
  let fixture: ComponentFixture<FairiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FairiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
