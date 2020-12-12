import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { AuthenticationService } from "./../../services/authentication.service";
import { Login } from "src/app/shared/interfaces/user.interface";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  nameSystem: string = "al sistema";
  form: FormGroup;
  loginData: Login;
  message: string;
  constructor(
    private _authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  get emailField(){
    return this.form.get('email');
  }

  get passwordField(){
    return this.form.get('password');
  }

  ngOnInit(): void {
    /* const json = { usuario: "malzamoraflores@prueba.com",
    contrasena:"123456"};
    this._authenticationService.signup(json).subscribe(
      response => {
        console.log(response);
      }
    );*/
  }

  login(body: Login){
    this.message = null;
    this._authenticationService.signup(body).subscribe(
      response => {
        if(response.Code < 1){
          this.message = "email o password incorrecto. Intente nuevamente."
        } else {
          this._authenticationService.setToken(response.Result.token);
        }
      }
    );
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.loginData = { usuario: value.email, contrasena: value.password };
      this.login(this.loginData);
    } else {
      this.form.markAllAsTouched();
    }  
  }

  onSubmit() {
    console.log(this.loginData);
  }
}
