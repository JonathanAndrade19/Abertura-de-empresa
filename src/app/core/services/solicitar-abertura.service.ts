import { Injectable } from '@angular/core';
import { EmpresaService } from './empresa.service';
import { AberturaForm } from '../interface/dadosForm.interface';
import { Observable } from 'rxjs';
import { Abertura, Empresa, Endereco, Solicitante } from '../interface/pedidosAberturaDeEmpresa.interface';

@Injectable({
  providedIn: 'root'
})
export class SolicitarAberturaService {

  constructor(private empresaService: EmpresaService) { }

  mountPayload(dados: AberturaForm, id?: number): Observable<any>{
    const newDataNascimento = dados.date_nascimento.split('-').reverse().join('/');

    const solicitante: Solicitante = {
      ds_responsavel: dados.ds_responsavel,
      nu_cpf: dados.nu_cpf,
      date_nascimento: newDataNascimento,
    };

    const endereco: Endereco = {
      co_cep: dados.co_cep,
      ds_logradouro: dados.ds_logradouro,
      co_numero: dados.co_numero,
      ds_complemento: dados.ds_complemento,
      ds_bairro: dados.ds_bairro,
      co_municipio: dados.co_municipio,
      co_uf: dados.co_uf,
    };

    const empresa: Empresa = {
      ds_nome_fantasia: dados.ds_nome_fantasia,
      co_entidade_registro: dados.co_entidade_registro,
      co_natureza_juridica: dados.co_natureza_juridica,
      endereco: endereco,
    };


    const payload: Abertura = {
      solicitante: solicitante,
      empresa: empresa,
      id: dados.id
    };

    return (id) 
      ? this.empresaService.putEditaEmpresa(id, payload) 
      : this.empresaService.postCadastraEmpresa(payload);
  }
}
