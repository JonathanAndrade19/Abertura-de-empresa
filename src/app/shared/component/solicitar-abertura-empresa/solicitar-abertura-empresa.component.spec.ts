import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarAberturaEmpresaComponent } from './solicitar-abertura-empresa.component';

describe('SolicitarAberturaEmpresaComponent', () => {
  let component: SolicitarAberturaEmpresaComponent;
  let fixture: ComponentFixture<SolicitarAberturaEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarAberturaEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarAberturaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
