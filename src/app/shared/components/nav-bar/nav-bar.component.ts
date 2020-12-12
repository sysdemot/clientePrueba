import { AuthenticationService } from './../../../auth/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  
  logout(){
    this._authenticationService.logout();
  }
}
