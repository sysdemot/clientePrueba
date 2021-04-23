import { logging } from "protractor";
import { Component, OnInit } from "@angular/core";
import { Cliente } from "src/app/shared/models/cliente";
import { ClienteService } from "../../services/cliente.service";

@Component({
  selector: "app-listar-cliente",
  templateUrl: "./listar-cliente.component.html",
  styleUrls: ["./listar-cliente.component.css"],
})
export class ListarClienteComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private _clienteService: ClienteService) {}

  ngOnInit(): void {
    this._clienteService.getClientes().subscribe((clientes) => {
      this.clientes = clientes;
      console.log(clientes);
    });
  }

  get promedioEdades(): number {
    let promedio = null;
    const numeroValores = this.clientes.length;
    if (numeroValores > 0) {
      const sumaEdades = this.clientes
        .map((cliente) => cliente.edad)
        .reduce((acc, el) => acc + el);
      promedio = (sumaEdades / numeroValores).toFixed(2);
    }

    return promedio;
  }

  get desviacionEstandarEdades(): number {
    let desviacionEstandar = null;
    const numeroValores = this.clientes.length;
    if (numeroValores > 0) {
      const promedio = this.promedioEdades;
      desviacionEstandar = Math.sqrt(
        this.clientes
          .map((cliente) => Math.pow(cliente.edad - promedio, 2))
          .reduce((acc, el) => acc + el) / numeroValores
      ).toFixed(2);
    }
    return desviacionEstandar;
  }
}
