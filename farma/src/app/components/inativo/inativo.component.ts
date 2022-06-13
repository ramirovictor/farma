import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-inativo',
  templateUrl: './inativo.component.html',
  styleUrls: ['./inativo.component.css']
})
export class InativoComponent implements OnInit {

  listaInativos: Cliente[] = [];

  constructor(private service: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
       resposta.forEach(cliente => {
         if(cliente.desativar) {
           this.listaInativos.push(cliente);
         }
       })
    })
  }

  voltar(): void {
    this.router.navigate([''])

  }

}
