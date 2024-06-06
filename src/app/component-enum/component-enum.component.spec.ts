import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEnumComponent } from './component-enum.component';

describe('ComponentEnumComponent', () => {
  let component: ComponentEnumComponent;
  let fixture: ComponentFixture<ComponentEnumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentEnumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentEnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
