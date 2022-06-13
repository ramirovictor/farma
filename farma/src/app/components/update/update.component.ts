import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

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

  constructor(private router: Router, private service: ClienteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.cliente.id).subscribe((resposta) => {
      this.cliente = resposta;
      console.log(resposta);
      console.log(this.cliente);
    })
  }

  update(): void {
    this.service.update(this.cliente).subscribe((resposta) => {
      this.service.message('Successfully update!')
      this.router.navigate([''])
    }, error => {
      this.service.message('Failed update!')
      this.router.navigate([''])
    })
  }

  cancel(): void {
    this.router.navigate([''])

  }

}

