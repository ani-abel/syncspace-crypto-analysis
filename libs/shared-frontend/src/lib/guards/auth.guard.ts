/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthResponse } from "@syncspace-crypto-analysis/graphql-config";
import { 
  getDataFromLocalStorage, 
  LocalStorageKey 
} from "@syncspace-crypto-analysis/utils";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements
CanActivate,
CanActivateChild {
  constructor(
    private readonly router: Router
  ) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
        : Promise<boolean> {
      return await this.handleRouteActivation();
  }

  async canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
        : Promise<boolean> {
      return await this.handleRouteActivation();
  }

  private async handleRouteActivation(): Promise<boolean> {
    const payload = await getDataFromLocalStorage<AuthResponse>(LocalStorageKey.SYNCSPACE_USER);
    if (
      payload?.token && 
      (payload.tokenExpiryDate * 1000) > Date.now()
    ) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
