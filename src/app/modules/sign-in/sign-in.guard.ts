import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SignInService } from "./sign-in.service";
import { map } from 'rxjs/operators';

@Injectable()

export class SignInGuard implements CanActivate {
    constructor(
        private signInService: SignInService,
        private router: Router
    ) { }

    canActivate(): Observable<boolean | UrlTree> {
        return this.signInService.user$.pipe(map(userData => {
            if (userData) {
                return true;
            } else {
                return this.router.createUrlTree([''])
            }
        }));
    }
}