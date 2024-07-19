export interface Abertura {
    solicitante: Solicitante;
    empresa: Empresa;
    id: number;
}

export interface Solicitante {
    ds_responsavel: string;
    nu_cpf: string;
    date_nascimento: string;
}

export interface Empresa {
    ds_nome_fantasia: string;
    co_entidade_registro: number;
    co_natureza_juridica?: number;
    endereco: Endereco;
}

export interface Endereco {
    co_cep: number;
    ds_logradouro: string;
    co_numero: string;
    ds_complemento: string;
    ds_bairro: string;
    co_municipio: string;
    co_uf: string;

}
