import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private opcoesService: OpcoesService,
    private router: Router
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

  verPedido(): void {
    this.router.navigateByUrl('/pedido');
  }

}
