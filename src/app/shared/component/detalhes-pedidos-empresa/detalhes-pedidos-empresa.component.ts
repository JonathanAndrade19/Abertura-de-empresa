import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-pedidos-empresa',
  standalone: true,
  imports: [],
  templateUrl: './detalhes-pedidos-empresa.component.html',
  styleUrl: './detalhes-pedidos-empresa.component.css'
})
export class DetalhesPedidosEmpresaComponent {

  @Input() dataSource$: any;

  constructor(private router: Router){}

  editarEmpresa(id: number): void {
    this.router.navigate([`empresa/${id}`]);
  }


}
