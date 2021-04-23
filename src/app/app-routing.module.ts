import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashMainComponent } from "./dashboard/components/dash-main/dash-main.component";
import { AdminComponent } from "./shared/components/admin/admin.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashMainComponent
      },
      {
        path: 'clientes',
        loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
      },
      {
        path: "**",
        redirectTo: 'dashboard',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
