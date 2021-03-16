import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TrainerVerificationGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly localStorage: LocalStorageService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (this.localStorage.isTrainerLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl("login")
      return false;
    }
  }

}
