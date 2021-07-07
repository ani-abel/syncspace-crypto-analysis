/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { AppRole, AuthResponse } from "@syncspace-crypto-analysis/graphql-config";
import { 
  getDataFromLocalStorage, 
  LocalStorageKey 
} from "@syncspace-crypto-analysis/utils";

export function canActivateForRoles(roles: AppRole[]) {
    return { data: { roles }, canActivate: [RoleGuard] };
};

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements
 CanActivate,
 CanActivateChild {
    constructor(
        private readonly router: Router
    ) { }

    async canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ) : Promise<boolean>  {
        const roles = route.data.roles as AppRole[];
        return await this.handleRouteActivation(roles);
    }

    async canActivateChild(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ) : Promise<boolean>  {
        const roles = route.data.roles as AppRole[];
        return await this.handleRouteActivation(roles);
    }

    // ? Refactor to use rxjs
    private async handleRouteActivation(roles?: string[]): Promise<boolean> {
       let isValid = false;
        const payload = await getDataFromLocalStorage<AuthResponse>(LocalStorageKey.SYNCSPACE_USER);
        if (
          payload?.token && 
          (payload.tokenExpiryDate * 1000) > Date.now()
        ) {
            if (!roles) {
                isValid = true;
            }
            isValid = roles.includes(payload.role);
        } else {
          isValid = false;
        }

        if (!isValid) {
            this.router.navigate(['/login']);
        }
        return isValid;
    }
}