import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExprienceDetailComponent } from './exprience-detail.component';

describe('ExprienceDetailComponent', () => {
  let component: ExprienceDetailComponent;
  let fixture: ComponentFixture<ExprienceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExprienceDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExprienceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
