import { HomeComponent } from './../home/home.component';
// angular imports
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';

// other library imports
import { UIRouterModule } from '@uirouter/angular';

const ROOT_ROUTE = [
  {
    name: 'Home.**',
    loadChildren: '../home/home.module#HomeModule'
  }
];

@NgModule({
  declarations: [],
  imports: [UIRouterModule.forRoot({ states: ROOT_ROUTE, useHash: false })],
  providers: [{ provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }],
  exports: [UIRouterModule]
})
export class CoreRoutingModule { }
