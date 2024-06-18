import { Component } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  // Variável para visibilidde dos botões
  btnCadastro: boolean = true;

  // Json de lista de clientes
  clientes: Cliente[] = [];

  // Criando construtor para pode ter acesso ao ServiceCliente
  constructor(private clienteService: ClienteService){

  }

  // Método para buscar todos os clientes
  selecionar():void{
    this.clienteService.selecionar().subscribe(retorno => this.clientes = retorno);
  }

}
