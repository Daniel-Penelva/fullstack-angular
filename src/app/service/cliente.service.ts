import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // URL da API
  private url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // Método para buscar todos os clientes
  selecionar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url + '/selecionar');
  }

  // Método para cadastrar cliente
  cadastrar(objCliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url + '/create', objCliente);
  }

}

/* HttpClient - responsável por realizar as requisições */