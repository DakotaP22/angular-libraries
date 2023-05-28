import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHttpSignalClientComponent } from './ng-http-signal-client.component';

describe('NgHttpSignalClientComponent', () => {
  let component: NgHttpSignalClientComponent;
  let fixture: ComponentFixture<NgHttpSignalClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgHttpSignalClientComponent]
    });
    fixture = TestBed.createComponent(NgHttpSignalClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
