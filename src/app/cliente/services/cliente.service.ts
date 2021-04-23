import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Cliente } from "./../../shared/models/cliente";

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  private _url: string = "https://prueba-b436f-default-rtdb.firebaseio.com/";

  constructor(private _http: HttpClient) {}

  addClientes(obj: Cliente) {
    return this._http.post(this._url + "clientes.json", obj);
  }

  getClientes(): Observable<Cliente[]> {
    return this._http
      .get<Cliente[]>(this._url + "clientes.json")
      .pipe(map(this.getArrayClientes));
  }

  private getArrayClientes(obj: object) {
    const clientes: Cliente[] = [];
    Object.keys(obj).forEach((key) => {
      const cliente: Cliente = obj[key];
      cliente.id = key;

      clientes.push(cliente);
    });

    return clientes;
  }
}
