import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLineaComponent } from './add-linea.component';

describe('AddLineaComponent', () => {
  let component: AddLineaComponent;
  let fixture: ComponentFixture<AddLineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
