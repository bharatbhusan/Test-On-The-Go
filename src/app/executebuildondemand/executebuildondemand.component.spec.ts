import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutebuildondemandComponent } from './executebuildondemand.component';

describe('ExecutebuildondemanddddddddComponent', () => {
  let component: ExecutebuildondemandComponent;
  let fixture: ComponentFixture<ExecutebuildondemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutebuildondemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutebuildondemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
