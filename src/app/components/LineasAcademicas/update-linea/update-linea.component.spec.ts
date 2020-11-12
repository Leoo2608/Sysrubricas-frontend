import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLineaComponent } from './update-linea.component';

describe('UpdateLineaComponent', () => {
  let component: UpdateLineaComponent;
  let fixture: ComponentFixture<UpdateLineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
