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

  // Variável visibilidade da tabela
  tabela: boolean = true;

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

      // Limpar formulário
      this.cliente = new Cliente();

      // add mensagem
      alert('Cliente cadastrado com sucesso!')
    });
  }

  // Método para selecionar um cliente especifico
  selecionarCliente(posicao:number):void{
    //Selecionar cliente
    this.cliente = this.clientes[posicao];

    // Visibilidade dos botões
    this.btnCadastro = false;

    // Visibilidade da tabela
    this.tabela = false;
  }

  // Método para editar cliente
  editar():void{
    this.clienteService.editar(this.cliente).subscribe(retorno => {

      // Obter a posição do vetor do cliente
      let posicao = this.clientes.findIndex(obj => {
        return obj.id == retorno.id;
      });

      // Alterar os dados do cliente no vetor
      this.clientes[posicao] = retorno;

      // Limpar formulário
      this.cliente = new Cliente();

      // Visibilidade dos botões
      this.btnCadastro = true;

      // Visibilidade da tabela
      this.tabela = true;

      // add mensagem
      alert('Cliente alterado com sucesso!');
    });
  }

  // Método para remover cliente
  remover():void{
    this.clienteService.remover(this.cliente.id).subscribe(retorno => {

      // Obter a posição do vetor do cliente
      let posicao = this.clientes.findIndex(obj => {
        return obj.id == this.cliente.id;
      });

      // deletar os dados do cliente no vetor
      this.clientes.splice(posicao, 1);

      // Limpar formulário
      this.cliente = new Cliente();

      // Visibilidade dos botões
      this.btnCadastro = true;

      // Visibilidade da tabela
      this.tabela = true;

      // add mensagem
      alert('Cliente removido com sucesso!');
    });
  }
}
