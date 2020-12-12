import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from './icons/icons.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './auth/components/form-login/form-login.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { ConfigurationComponent } from './config/components/configuration/configuration.component';
import { DashMainComponent } from './dashboard/components/dash-main/dash-main.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { AdminComponent } from './shared/components/admin/admin.component';
import { SidebarMenuComponent } from './shared/components/sidebar-menu/sidebar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    LoginComponent,
    ConfigurationComponent,
    DashMainComponent,
    AdminComponent,
    NavBarComponent,
    SidebarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    IconsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
