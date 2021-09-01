import { Component, OnInit } from '@angular/core';
import { OpcaoDTO, OpcoesAgrupadosPorCategoriaDTO } from '../cardapio.model';
import { OpcoesService } from '../opcoes.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  cardapio: OpcoesAgrupadosPorCategoriaDTO[];

  constructor(private opcoesService: OpcoesService) {
    this.cardapio = [];
  }

  ngOnInit(): void {
    this.opcoesService.findAll().subscribe(
      res => this.cardapio = res,
      err => console.log(err.message)
    );
  }

  adicionar(opcao: OpcaoDTO): void {
    console.log('opcao', opcao);
  }

}
