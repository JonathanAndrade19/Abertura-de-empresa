import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Cep } from '../../../core/interface/cep.interface';
import { SolicitarAberturaService } from '../../../core/services/solicitar-abertura.service';
import { EmpresaService } from '../../../core/services/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Abertura } from '../../../core/interface/pedidosAberturaDeEmpresa.interface';
import { AberturaForm } from '../../../core/interface/dadosForm.interface';
import Swal from 'sweetalert2';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-solicitar-abertura-empresa',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, NgFor],
  templateUrl: './solicitar-abertura-empresa.component.html',
  styleUrl: './solicitar-abertura-empresa.component.css'
})
export class SolicitarAberturaEmpresaComponent implements OnInit {
  
  @Input() public dataSource$: any;

  public listNaturesaJuridica: Array<any> = new Array;
  public listEntidadeRegistro: Array<any> = new Array;
  public novaEmpresaForm!: FormGroup;
  public formCep!: Cep;
  private _id!: any;
  private _cep!: Cep;

  constructor(
    private empresaService: EmpresaService,
    private solicitaAberturaService: SolicitarAberturaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.mountForm();
    this.getListNaturezaJuridica();
    this.getListEntidadeRegistro();
    this._id = this.route.snapshot.paramMap.get('id');
    if (this._id) {
      this.getById();
    }
  }

  public getListNaturezaJuridica() {
    this.empresaService.getNaturezaJuridica()
      .subscribe(data => {
        this.listNaturesaJuridica = data;
      })
  }

  public getListEntidadeRegistro() {
    this.empresaService.getEntidadeRegistro()
      .subscribe(data => {
        this.listEntidadeRegistro = data;
      })
  }

  public cadastrarNovaEmpresa() {
    if (this.novaEmpresaForm.valid) {
      const dados: AberturaForm = this.novaEmpresaForm.getRawValue();
      this.solicitaAberturaService.mountPayload(dados)
      .subscribe(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Solicitação cadastrada com sucesso',
          showConfirmButton: false,
          timer: 2000
        });
        this.router.navigate(['']);
      },
        (error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ocorreu um erro ao tentar cadastrar, tente novamente!',
            showConfirmButton: false,
            timer: 2000
          });
        }
      );
    }
  }

  public editarEmpresa() {
    if (this.novaEmpresaForm.valid) {
      const dados: AberturaForm = this.novaEmpresaForm.getRawValue();
      this.solicitaAberturaService.mountPayload(dados, this._id)
      .subscribe(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Solicitação alterada com sucesso',
          showConfirmButton: false,
          timer: 2000
        });
        this.router.navigate(['']);
      },
        (error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ocorreu um erro ao tentar editar, tente novamente!',
            showConfirmButton: false,
            timer: 2000
          });
        }
      );
    }
  }

  public save(): void {
    this._id ? this.editarEmpresa() : this.cadastrarNovaEmpresa();
  }

  public mountForm(): void {
    this.novaEmpresaForm = this.formBuilder.group({
      ds_responsavel: [],
      nu_cpf: [],
      date_nascimento: [],
      co_entidade_registro: [],
      co_natureza_juridica: [],
      ds_nome_fantasia: [],
      co_cep: [],
      ds_logradouro: [],
      ds_bairro: [],
      ds_complemento: [],
      co_municipio: [],
      co_uf: [],
      co_numero: []
    });
  }

  public setValue(dados: Abertura) {
    const newDataNascimento = dados.solicitante.date_nascimento.split('-').reverse().join('/');

    this.novaEmpresaForm.get('ds_responsavel')?.setValue(dados.solicitante.ds_responsavel);
    this.novaEmpresaForm.get('nu_cpf')?.setValue(dados.solicitante.nu_cpf);
    this.novaEmpresaForm.get('date_nascimento')?.setValue(newDataNascimento);
    this.novaEmpresaForm.get('co_entidade_registro')?.setValue(dados.empresa.co_entidade_registro);
    this.novaEmpresaForm.get('ds_nome_fantasia')?.setValue(dados.empresa.ds_nome_fantasia);
    this.novaEmpresaForm.get('co_natureza_juridica')?.setValue(dados.empresa.co_natureza_juridica);
    this.novaEmpresaForm.get('co_cep')?.setValue(dados.empresa.endereco.co_cep);
    this.novaEmpresaForm.get('ds_logradouro')?.setValue(dados.empresa.endereco.ds_logradouro);
    this.novaEmpresaForm.get('ds_bairro')?.setValue(dados.empresa.endereco.ds_bairro);
    this.novaEmpresaForm.get('ds_complemento')?.setValue(dados.empresa.endereco.ds_complemento);
    this.novaEmpresaForm.get('co_municipio')?.setValue(dados.empresa.endereco.co_municipio);
    this.novaEmpresaForm.get('co_uf')?.setValue(dados.empresa.endereco.co_uf);
    this.novaEmpresaForm.get('co_numero')?.setValue(dados.empresa.endereco.co_numero);

  }

  public getById(): void {
    this.empresaService.getDetalheEmpresa(this._id)
      .subscribe((data: any) => {
        this.setValue(data);
      });
  }

  public getCep(): void {
    const cepValue = this.novaEmpresaForm.get('co_cep')?.value;
    this.empresaService.getCep(cepValue)
      .subscribe((dados) => {
        this._cep = dados;
        this.setCepValue();
      });
  }

  public setCepValue(): void {
    this.novaEmpresaForm.get('co_cep')?.setValue(this._cep.cep);
    this.novaEmpresaForm.get('ds_logradouro')?.setValue(this._cep.logradouro);
    this.novaEmpresaForm.get('ds_bairro')?.setValue(this._cep.bairro);
    this.novaEmpresaForm.get('ds_complemento')?.setValue(this._cep.complemento);
    this.novaEmpresaForm.get('co_municipio')?.setValue(this._cep.localidade);
    this.novaEmpresaForm.get('co_uf')?.setValue(this._cep.uf);
  }

  
}
