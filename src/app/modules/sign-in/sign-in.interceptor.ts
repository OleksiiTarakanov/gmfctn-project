import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { SignInService } from './sign-in.service';

@Injectable()
export class SignInInterceptor implements HttpInterceptor {

    constructor(
        private signInService: SignInService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.signInService.user$.pipe(take(1)).pipe(switchMap((user) => {
            if (!user || !user.token) {
                return next.handle(request);
            }
            
            localStorage.setItem('currentUser', user.token)

            const setHeaders = {
                Authorization: 'Bearer ' + user.token,
                refreshToken: 'Bearer ' + user.refreshToken
            };

            return next.handle(request.clone({ setHeaders }));
        }));
    }
}
