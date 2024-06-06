import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentClassComponent } from './component-class.component';

describe('ComponentClassComponent', () => {
  let component: ComponentClassComponent;
  let fixture: ComponentFixture<ComponentClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
