import { CoreRoutingModule } from './core-routing.module';
import { HomeModule } from './../home/home.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CommonModule, CoreRoutingModule
  ],
  declarations: [CoreComponent, HeaderComponent, FooterComponent],
  exports: [CoreComponent]
})
export class CoreModule {

}

