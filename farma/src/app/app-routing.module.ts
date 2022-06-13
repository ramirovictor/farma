import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { InativoComponent } from './components/inativo/inativo.component';
import { ListarComponent } from './components/listar/listar.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent
  },
  {
    path: 'inativo',
    component: InativoComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  },
  {
    path: 'listar',
    component: ListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
