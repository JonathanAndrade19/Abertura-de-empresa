import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPedidosEmpresaComponent } from './detalhes-pedidos-empresa.component';

describe('DetalhesPedidosEmpresaComponent', () => {
  let component: DetalhesPedidosEmpresaComponent;
  let fixture: ComponentFixture<DetalhesPedidosEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesPedidosEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesPedidosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
