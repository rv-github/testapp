import { UIRouterModule } from '@uirouter/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RakutenComponent } from './components/rakuten/rakuten.component';

@NgModule({
  imports: [
    CommonModule, HomeRoutingModule
  ],
  declarations: [HomeComponent, RakutenComponent]
})
export class HomeModule { }
