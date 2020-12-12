import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../auth/services/authentication.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthenticationService, private _router: Router) {}

  canActivate(): boolean {
    if (this._auth.isAuthenticated()) {
      return true;
    } else {
      // Redireccion al login
      this._router.navigate(["/login"]);
    }
  }
}
