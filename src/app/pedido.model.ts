import { OpcaoDTO } from "./cardapio.model";

export interface PedidoItem {
  opcao: OpcaoDTO;
  quantidade: number;
}