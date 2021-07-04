import { NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';
import { GraphQLConfigModule } from '@syncspace-crypto-analysis/graphql-config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule, 
    SharedFrontendModule,
    GraphQLConfigModule,
    StoreModule.forRoot([ ]),
    EffectsModule.forRoot([ ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: "₦"
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
