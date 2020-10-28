import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private auth:AuthService,private router:Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(this.auth.isLoggedIn()){
            return true
        }

        this.router.navigate(['/login'],{queryParams:{url:state.url}})

        return false
            
    }
}