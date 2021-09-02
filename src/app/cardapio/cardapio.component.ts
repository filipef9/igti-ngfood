import { Component, OnInit } from '@angular/core';
import { OpcaoDTO, OpcoesAgrupadosPorCategoriaDTO } from '../cardapio.model';
import { OpcoesService } from '../opcoes.service';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  cardapio: OpcoesAgrupadosPorCategoriaDTO[];

  constructor(
    public pedidoService: PedidoService,
    private opcoesService: OpcoesService
  ) {
    this.cardapio = [];
  }

  ngOnInit(): void {
    this.opcoesService.findAll().subscribe(
      res => this.cardapio = res,
      err => console.log(err.message)
    );
  }

  adicionar(opcao: OpcaoDTO): void {
    this.pedidoService.adicionar(opcao);
  }

}
