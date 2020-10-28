import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppInterface } from 'src/app/app.api';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            
            const token=JSON.parse(localStorage.getItem('token'))

            const requestUrl=req.url.split('/')
            const apiUrl=AppInterface.IMALI_API.split('/')
    
            
            if(token && apiUrl[2]==requestUrl[2]){
                const newRequest=req.clone({setHeaders:{'Authorization':`Bearer ${token.access_token}`}})
                return next.handle(newRequest);
            }


        return next.handle(req);
    }
}