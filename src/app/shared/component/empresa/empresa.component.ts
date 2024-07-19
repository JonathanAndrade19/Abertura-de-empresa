import { Component, OnInit } from '@angular/core';
import { ListarPedidosEmpresaComponent } from '../listar-pedidos-empresa/listar-pedidos-empresa.component';
import { DetalhesPedidosEmpresaComponent } from '../detalhes-pedidos-empresa/detalhes-pedidos-empresa.component';
import { EmpresaService } from '../../../core/services/empresa.service';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [ListarPedidosEmpresaComponent, DetalhesPedidosEmpresaComponent],
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})
export class EmpresaComponent implements OnInit{

  public listarEmpresa: Array<any> = new Array;
  private detalheEmpresa: any;
  private isDetail: boolean = false;

  constructor(private empresaService: EmpresaService){

  }
  ngOnInit(): void {
    this.getListarEmpresa();
  }

  getById(event: any): void{
    this.empresaService.getDetalheEmpresa(event).subscribe((dados: any) => {
      this.detalheEmpresa = dados;
      this.isDetail = true;
    })
  }

  getListarEmpresa(){
    this.empresaService.getListAberturaEmpresa().subscribe((dados) => {
      this.listarEmpresa = dados;
    })
  }

}
