import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

declare let process: any;
const env = process.env.NODE_ENV;

const uri = (env === 'production') ? 
  'https://abel-ani.herokuapp.com/graphql' : 
  'http://localhost:3000/graphql';

export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
  exports: [
    HttpLinkModule,
    HttpClientModule
  ],
})
export class GraphQLConfigModule { }
