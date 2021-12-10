import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHabilidade } from '../model/habilidade.model';

@Injectable({
  providedIn: 'root'
})

export class HabilidadeService {

  constructor(private httpClient: HttpClient) { }

  salvarHabilidade(habilidade: IHabilidade): Promise<IHabilidade> {
    return this.httpClient.post<IHabilidade>('http://localhost:8080/pokemon/habilidade/', habilidade).toPromise();
  }
  // não tem métodos pra listar ou editar habilidades 
  
}