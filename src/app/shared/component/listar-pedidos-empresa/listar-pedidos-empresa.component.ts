import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-listar-pedidos-empresa',
  standalone: true,
  imports: [NgForOf, NgFor, NgIf],
  templateUrl: './listar-pedidos-empresa.component.html',
  styleUrl: './listar-pedidos-empresa.component.css'
})
export class ListarPedidosEmpresaComponent {

  @Input() dataSource$: any;
  @Output() OnclickVisualizar: EventEmitter<any> = new EventEmitter();

  constructor(){}

  visualizar(id: number): void {
    this.OnclickVisualizar.emit(id);
  }

}
