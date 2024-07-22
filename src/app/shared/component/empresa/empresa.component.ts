import { Component, OnInit } from '@angular/core';
import { ListarPedidosEmpresaComponent } from '../listar-pedidos-empresa/listar-pedidos-empresa.component';
import { DetalhesPedidosEmpresaComponent } from '../detalhes-pedidos-empresa/detalhes-pedidos-empresa.component';
import { EmpresaService } from '../../../core/services/empresa.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [ListarPedidosEmpresaComponent, DetalhesPedidosEmpresaComponent,NgIf],
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})
export class EmpresaComponent implements OnInit{

  public listarEmpresa: Array<any> = new Array;
  public detalheEmpresa: any;
  public isDetail: boolean = false;

  constructor(private empresaService: EmpresaService){

  }
  ngOnInit(): void {
    this.getListarEmpresa();
  }

  getById(event: any): void{
    this.empresaService.getDetalheEmpresa(event).subscribe((dados) => {
      this.detalheEmpresa = dados;
      this.isDetail = true;
      console.log("detalheEmpresa", this.detalheEmpresa)
    })
  }

  getListarEmpresa(){
    this.empresaService.getListAberturaEmpresa().subscribe((dados) => {
      this.listarEmpresa = dados;
    })
  }

}
