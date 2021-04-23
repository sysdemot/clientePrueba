import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {
  NgbDateAdapter,
  NgbDateParserFormatter,
} from "@ng-bootstrap/ng-bootstrap";
import { Cliente } from "src/app/shared/models/cliente";
import { ClienteService } from "../../services/cliente.service";
import { CustomDateParserFormatter } from "./../../../shared/services/datepicker-format-input";
import { CustomAdapter } from "./../../../shared/services/datepicker-format-model";

@Component({
  selector: "app-crear-cliente",
  templateUrl: "./crear-cliente.component.html",
  styleUrls: ["./crear-cliente.component.css"],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class CrearClienteComponent implements OnInit {
  form: FormGroup;
  submitLoader: boolean = false;
  errorMessage: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private _clienteService: ClienteService,
    private _router: Router
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      fechaNacimiento: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "[0-9]{4}-([1-9]|0[1-9]|1[012])-([1-9]|0[1-9]|1[0-9]|2[0-9]|3[01])"
          ),
        ],
      ],
      edad: [null, Validators.required],
    });
  }

  get nombreInvalid() {
    return this.form.get("nombre").touched && this.form.get("nombre").errors;
  }

  get apellidoInvalid() {
    return (
      this.form.get("apellido").touched && this.form.get("apeliido").errors
    );
  }

  get edadInvalid() {
    return this.form.get("edad").touched && this.form.get("edad").errors;
  }

  get fechaNacimientoInvalid() {
    return (
      this.form.get("fechaNacimiento").touched &&
      this.form.get("fechaNacimiento").errors
    );
  }

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      const cliente: Cliente = this.form.value;
      this.addCliente(cliente);
    } else {
      this.form.markAllAsTouched();
    }
  }

  addCliente(obj: Cliente) {
    this.submitLoader = true;
    this._clienteService.addClientes(obj).subscribe(
      () => {
        this.submitLoader = false;
        this._router.navigate(["/clientes/lista"]);
      },
      () => {
        this.submitLoader = false;
        this.errorMessage = "No se pudieron guardar los datos.";
      }
    );
  }
}
