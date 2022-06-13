import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  inativo = 0; 

  list: Cliente[] = [];
  listaPesquisa: Cliente[] = [];
  listaInativos: Cliente[] = [];

  constructor(private service: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
    this.listaPesquisa = this.list;

  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
       resposta.forEach(cliente => {
         if(cliente.desativar) {
           this.listaInativos.push(cliente);
         }else {
           this.list.push(cliente);
         }
       })
       this.inativo = this.listaInativos.length
    })
  }

  inativarCliente(item: Cliente): void {
    item.desativar = true;
    this.service.update(item).subscribe(() => {
      this.service.message('Cliente desativado!');
        this.list = this.list.filter(cliente => cliente.id !== item.id);
        this.inativo++;
    })

  }

  pesquisar(event: Event): void{
    const target = event.target as HTMLInputElement;
    const value = target.value;
    
    if(this.listaPesquisa.length === 0){
      this.listaPesquisa = this.list;
    }else{
      this.listaPesquisa = this.list.filter((item) =>{
        return item.documento?.includes(value);
      })  
    }
    

  }

  navegarParaInativos(): void {
    this.router.navigate(['inativo'])

  }
}
