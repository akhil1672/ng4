import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { LoginService } from '../services/login.service';

@Injectable()
export class RoutingGuardService implements CanActivate{

  constructor(private loginService: LoginService) { }

  canActivate() {
    return this.loginService.isLoggedIn();
  }

}
