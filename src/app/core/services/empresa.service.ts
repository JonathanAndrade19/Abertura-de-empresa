import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cep } from '../interface/cep.interface';
import { Abertura } from '../interface/pedidosAberturaDeEmpresa.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  
  private readonly API = 'http://localhost:3000/empresas';
  private readonly APINaturezaJuridica = 'http://localhost:3000/natureza-juridica';
  private readonly APIEntidadeRegistro = 'http://localhost:3000/entidade-registro';
  
  private readonly APIceps = 'https://viacep.com.br/ws'

  constructor(private http: HttpClient) { }

  public getListAberturaEmpresa(): Observable<any> {
    return this.http.get(this.API);
  }

  public getDetalheEmpresa(id: string): Observable<any>{
    return this.http.get(`${this.API}/${id}`);
  }

  public getNaturezaJuridica(): Observable<any> {
    return this.http.get(this.APINaturezaJuridica);
  }

  public getEntidadeRegistro = (): Observable<any> =>
  this.http.get(this.APIEntidadeRegistro);

  public postCadastraEmpresa(novaEmpresa: Abertura): Observable<any>{
    return this.http.post(this.API, novaEmpresa);
  }

  public putEditaEmpresa(id: number, dados: Abertura): Observable<any>{
    return this.http.put(`${this.API}/${id}`, dados);
  }

  public getCep(cep: string): Observable<Cep>{
    return this.http.get<Cep>(`${this.APIceps}/${cep}/json/`);
  }





}
