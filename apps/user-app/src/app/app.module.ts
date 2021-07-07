import { NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AuthInterceptor, SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';
import { GraphQLConfigModule } from '@syncspace-crypto-analysis/graphql-config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { environment } from '../environments/environment';
import { AppEffectService } from './store/effect/app.effect';
import { AppReducer } from './store/reducer/app.reducer';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule, 
    SharedModule,
    SharedFrontendModule,
    GraphQLConfigModule,
    StoreModule.forRoot([AppReducer]),
    EffectsModule.forRoot([AppEffectService]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: "₦"
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
