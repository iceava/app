import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  isLogged: boolean = true;



  constructor(private router: Router, private sLogin: AuthService) { }




  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.sLogin.isLoggedIn){
      return true
    } else {  
     this.sLogin.redirect = state.url
     this.router.navigate(['login'])
    }
    
    return false
  }
  
}
