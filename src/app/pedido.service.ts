import { Injectable } from '@angular/core';
import { OpcaoDTO } from './cardapio.model';
import { PedidoItem } from './pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private _pedido: PedidoItem[] = [];

  constructor() { }

  get pedido(): PedidoItem[] {
    return [...this._pedido];
  }

  getTotalItemsPedido(): number {
    return this._pedido.reduce(
      (soma: number, item: PedidoItem): number => soma + item.quantidade,
      0
    );
  }

  getValorTotalPedido(): number {
    return this._pedido.reduce(
      (soma: number, item: PedidoItem) => soma + (item.quantidade * item.opcao.preco),
      0
    );
  }

  adicionar(opcao: OpcaoDTO): void {
    const foundItemIndex = this.procuraItemNoPedido(opcao);
    const itemJaFoiAdicionadoAoPedido = foundItemIndex !== -1;

    if (itemJaFoiAdicionadoAoPedido) {
      this.incrementaQuantidadeDoItem(foundItemIndex);
    } else {
      this.adicionaNovoItem(opcao);
    }
  }

  private procuraItemNoPedido(opcao: OpcaoDTO): number {
    return this._pedido.findIndex(item => item.opcao.descricao === opcao.descricao);
  }

  private incrementaQuantidadeDoItem(itemIndex: number): void {
    this._pedido[itemIndex].quantidade += 1;
  }

  private adicionaNovoItem(opcao: OpcaoDTO): void {
    this._pedido = [
      ...this._pedido,
      { opcao, quantidade: 1 }
    ];
  }

}
