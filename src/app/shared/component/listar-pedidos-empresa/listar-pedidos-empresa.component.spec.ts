import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPedidosEmpresaComponent } from './listar-pedidos-empresa.component';

describe('ListarPedidosEmpresaComponent', () => {
  let component: ListarPedidosEmpresaComponent;
  let fixture: ComponentFixture<ListarPedidosEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPedidosEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPedidosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
