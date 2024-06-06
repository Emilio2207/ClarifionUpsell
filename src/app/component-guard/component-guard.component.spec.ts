import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGuardComponent } from './component-guard.component';

describe('ComponentGuardComponent', () => {
  let component: ComponentGuardComponent;
  let fixture: ComponentFixture<ComponentGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentGuardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
