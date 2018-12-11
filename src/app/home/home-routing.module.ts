import { HomeComponent } from './home.component';
// angular imports
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';

// other library imports
import { UIRouterModule } from '@uirouter/angular';
import { RakutenComponent } from './components/rakuten/rakuten.component';

const CHILD_ROUTE = [
  {
    name: 'Home',
    component: HomeComponent
  },
  {
    name: 'Home.HomeComponent',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [UIRouterModule.forChild({ states: CHILD_ROUTE })],
  providers: [{ provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }]
})
export class HomeRoutingModule { }
