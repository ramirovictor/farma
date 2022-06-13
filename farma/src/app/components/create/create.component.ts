import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  cliente: Cliente = {
    nome: '',
    documento: '',
    email: '',
    telefone: '',
    endereco:{
      cep: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: ''
      },
    desativar: false
  }

  constructor(private router: Router, private service: ClienteService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.cliente).subscribe((resposta) => {
      this.service.message('Cliente criado com sucesso!');
      this.router.navigate(['']);
    }, err => {
      this.service.message('Failed ao criar cliente!');
      this.router.navigate(['']);
    })

  }

  cancel(): void {
    this.router.navigate([''])

  }

}
