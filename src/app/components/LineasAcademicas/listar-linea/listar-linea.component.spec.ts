import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLineaComponent } from './listar-linea.component';

describe('ListarLineaComponent', () => {
  let component: ListarLineaComponent;
  let fixture: ComponentFixture<ListarLineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarLineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
