import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairiesListComponent } from './fairies-list.component';

describe('FairiesListComponent', () => {
  let component: FairiesListComponent;
  let fixture: ComponentFixture<FairiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FairiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
