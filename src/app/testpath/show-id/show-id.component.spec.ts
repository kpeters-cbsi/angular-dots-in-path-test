import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIdComponent } from './show-id.component';

describe('ShowIdComponent', () => {
  let component: ShowIdComponent;
  let fixture: ComponentFixture<ShowIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowIdComponent]
    });
    fixture = TestBed.createComponent(ShowIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
