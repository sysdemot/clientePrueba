import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Login } from "src/app/shared/interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  url: string;
  constructor(private _http: HttpClient, private _router: Router) {
    this.url =
      "http://34.226.244.13/MolisacApiRest/apiMolisac/login/validaAcceso";
  }

  signup(json: Login): Observable<any> {
    let body = JSON.stringify(json);

    let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.post(this.url, body, { headers: headers });
  }

  logout() {
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }

  setToken(token: string) {
    localStorage.setItem("token", token);
    this._router.navigate(["/dashboard"]);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isAuthenticated(): boolean {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") != "undefined"
    ) {
      return true;
    } else {
      return false;
    }
  }
}
