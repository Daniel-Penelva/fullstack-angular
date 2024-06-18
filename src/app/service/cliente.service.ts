import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // URL da API - corresponde a mesma url definida na api do SpringBoot
  private url: string = 'http://localhost:8080/selecionar';

  constructor(private http: HttpClient) { }

  // Método para buscar todos os clientes
  selecionar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }
}

/* HttpClient - responsável por realizar as requisições */