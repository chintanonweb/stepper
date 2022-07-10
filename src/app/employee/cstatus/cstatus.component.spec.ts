import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CstatusComponent } from './cstatus.component';

describe('CstatusComponent', () => {
  let component: CstatusComponent;
  let fixture: ComponentFixture<CstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
