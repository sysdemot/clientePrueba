import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from './icons/icons.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashMainComponent } from './dashboard/components/dash-main/dash-main.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { AdminComponent } from './shared/components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashMainComponent,
    AdminComponent,
    NavBarComponent
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
