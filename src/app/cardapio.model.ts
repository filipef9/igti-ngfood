export interface OpcaoDTO {
  categoria: string;
  descricao: string;
  preco: number;
}

export interface OpcoesAgrupadosPorCategoriaDTO {
  categoria: string;
  opcoes: OpcaoDTO[];
}