import { ToastrManager } from 'ng6-toastr-notifications';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

    constructor(private toastr: ToastrManager) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            // retry(1),
            catchError((error: HttpErrorResponse) => {

                let errorMessage = '';

                if (error.error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage = `Erro: ${error.error.message}`;

                } else {
                    // server-side error
                    errorMessage = `Mensagem: ${error.error.message}`;
                }

                this.toastr.errorToastr(errorMessage, 'Alerta',{position:'top-center'})

                
                return next.handle(req);
            }));
    }
}