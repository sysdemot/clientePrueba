import { AppComponent } from './app.component';
import { ConfigurationComponent } from './config/components/configuration/configuration.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashMainComponent } from "./dashboard/components/dash-main/dash-main.component";
import { AdminComponent } from "./shared/components/admin/admin.component";
import { LoginComponent } from './auth/pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "dashboard", component: DashMainComponent },
      { path: "configuracion", component: ConfigurationComponent }
    ]
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
