import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTabComponent } from './register-tab.component';

describe('RegisterTabComponent', () => {
  let component: RegisterTabComponent;
  let fixture: ComponentFixture<RegisterTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
