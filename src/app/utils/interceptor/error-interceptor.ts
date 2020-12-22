import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';





@Injectable()


export class ErrorInterceptor implements HttpInterceptor {
  constructor( ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status !== 401) {
          // this.notify.notError(error.error['0']);


        }
        // this.spinner.hide();
        return throwError(error);
      })
    );
  }



}

