import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent {

  constructor(
    public pedidoService: PedidoService,
    private router: Router
  ) { }

  incluirMaisItens(): void {
    this.router.navigateByUrl('/cardapio');
  }

  limpar(): void {
    this.pedidoService.limpar();
  }

}
