import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';
import { GraphQLConfigModule } from '@syncspace-crypto-analysis/graphql-config';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    SharedFrontendModule,
    GraphQLConfigModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
