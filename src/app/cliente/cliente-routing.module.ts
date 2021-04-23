import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CrearClienteComponent } from "./components/crear-cliente/crear-cliente.component";
import { ListarClienteComponent } from "./components/listar-cliente/listar-cliente.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "crear", component: CrearClienteComponent },
      { path: "lista", component: ListarClienteComponent },
      { path: "**", redirectTo: "lista" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
