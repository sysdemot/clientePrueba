import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";

import { ClienteRoutingModule } from './cliente-routing.module';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { IconsModule } from '../icons/icons.module';


@NgModule({
  declarations: [CrearClienteComponent, ListarClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgbDatepickerModule,
    IconsModule
  ]
})
export class ClienteModule { }
