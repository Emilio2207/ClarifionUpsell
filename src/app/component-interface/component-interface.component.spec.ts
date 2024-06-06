import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInterfaceComponent } from './component-interface.component';

describe('ComponentInterfaceComponent', () => {
  let component: ComponentInterfaceComponent;
  let fixture: ComponentFixture<ComponentInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
