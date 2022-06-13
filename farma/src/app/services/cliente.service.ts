import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  findById(id: any): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url);

  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliente.id}`
    return this.http.put<Cliente>(url, cliente);
  }

 /** delete(id: any): Observable<void>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<void>(url);
  } */

  create(cliente: Cliente):Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente);

  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
