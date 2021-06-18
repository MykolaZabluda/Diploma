import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondorsetComponent } from './condorset.component';

describe('CondorsetComponent', () => {
  let component: CondorsetComponent;
  let fixture: ComponentFixture<CondorsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondorsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondorsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
