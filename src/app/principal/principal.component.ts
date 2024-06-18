import { Component } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  // Criando objeto do tipo cliente
  cliente = new Cliente();

  // Variável para visibilidde dos botões
  btnCadastro: boolean = true;

  // Json de lista de clientes
  clientes: Cliente[] = [];

  // Criando construtor para pode ter acesso ao ServiceCliente
  constructor(private clienteService: ClienteService){

  }

  // Método de inicialização
  ngOnInit(): void {
    this.selecionar();
  }

  // Método para buscar todos os clientes
  selecionar():void{
    this.clienteService.selecionar().subscribe(retorno => this.clientes = retorno);
  }

  // Método para cadastrar cliente
  cadastrar():void{
    this.clienteService.cadastrar(this.cliente).subscribe(retorno => {
      this.clientes.push(retorno);
    });
  }

}
