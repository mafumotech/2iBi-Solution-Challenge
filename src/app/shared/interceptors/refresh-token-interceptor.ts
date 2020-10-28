import { ToastrManager } from 'ng6-toastr-notifications';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,flatMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AppInterface } from 'src/app/app.api';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
    
    constructor(public injector:Injector,public auth:AuthService,private toastr:ToastrManager){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        
        return next.handle(req).pipe(catchError((errorResponse:HttpErrorResponse)=>{
            
            const error=(typeof errorResponse.error !== 'object')? JSON.parse(errorResponse.error || '{}') : errorResponse.error

            if(errorResponse.status==401 && error.message=="Unauthenticated."){

                let token:any=JSON.parse(localStorage.getItem('token'))

                const http=this.injector.get(HttpClient)

                let postData = {
                    grant_type: 'refresh_token',
                    refresh_token: token.refresh_token,
                    client_secret: '0WkyIvKtvSeUw86YWBwqLiP9H2cZlw06tjSM1eYP',
                    client_id: 2,
                    scope: ''
                }

                return http.post<any>(`${AppInterface.IMALI_API}/auth/refresh`,postData)
                .pipe(flatMap(authData=>{
                    localStorage.setItem('token',JSON.stringify(authData))
                    
                    this.toastr.successToastr('A sua sessão foi iniciada automaticamente com sucesso!', 'Alerta')
                    const cloneRequest=req.clone({setHeaders:{'Authorization':`Bearer ${authData.access_token}`}})
                    return next.handle(cloneRequest)
                }))

              
            }

            return throwError(error)
        }))
    }
}