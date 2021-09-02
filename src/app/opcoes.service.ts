import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import groupBy from 'lodash/groupBy';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OpcaoDTO, OpcoesAgrupadosPorCategoriaDTO } from './cardapio.model';

const API_URL = 'https://3000-rose-shrew-cp0xaafb.ws-us16.gitpod.io';

@Injectable({
  providedIn: 'root'
})
export class OpcoesService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<OpcoesAgrupadosPorCategoriaDTO[]> {
    return this.http.get<OpcaoDTO[]>(`${API_URL}/cardapio`)
      .pipe(
        map((response: OpcaoDTO[]): OpcoesAgrupadosPorCategoriaDTO[] => {
          let agrupamento: OpcoesAgrupadosPorCategoriaDTO[] = [];

          for (const [key, value] of Object.entries(groupBy(response, 'categoria'))) {
            agrupamento = [
              ...agrupamento,
              {
                categoria: key,
                opcoes: value as OpcaoDTO[]
              }
            ];
          }

          return agrupamento;
        }),
        catchError(error => throwError(error))
      );
  }

}
