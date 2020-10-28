import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppInterface } from 'src/app/app.api';

@Injectable()
export class AuthService {


    constructor(
        private http: HttpClient,
        private toastr: ToastrManager,
        private router: Router,
    ) { }

    apiLoginParams(cridentials: any) {
        return {
            grant_type: 'password',
            client_id: 2,
            client_secret: 'RfZMAVoCeSpWQBKbcK18u88agYypEIQAqvgqgMth',
            username: cridentials.email,
            password: cridentials.password,
            scope: ''
        }
    }

    login(cridentials: any): any {
        return this.http.post<any>(`${AppInterface.IMALI_API_AUTH}`, this.apiLoginParams(cridentials))
            .pipe(switchMap(authData => {

                localStorage.setItem('token', JSON.stringify(authData))

                return this.http.get(`${AppInterface.IMALI_API}/user`)
                // return this.getLoggedUser()

            }, map(user => {
                console.log(user)
            })))

    }

    getLoggedUser(): Observable<any> {
        return this.http.get(`${AppInterface.IMALI_API}/user`)
            .pipe(map((userData => userData)))
    }

    getLogs(): Observable<any> {
        return this.http.get(`${AppInterface.IMALI_API}/get-app-logs`)
            .pipe(map((userData => userData)))
    }

    logout() {

        if (confirm('Você quer realmente sair?')) {

            localStorage.clear()
            this.router.navigate(['/login'])
            this.toastr.infoToastr('Utilizador Desconectado!', 'info', { position: 'top-center' })

        }

    }

    isLoggedIn(): boolean {
        if (localStorage.getItem('user') && localStorage.getItem('token'))
            return true

        return false
    }

    get user(): any {
        return JSON.parse(localStorage.getItem('user'))
    }

}
