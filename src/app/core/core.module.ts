import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent } from './components';
import { AppComponent } from './containers';

export const COMPONENTS = [HeaderComponent, FooterComponent];
export const CONTAINERS = [AppComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [COMPONENTS, CONTAINERS],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CoreModule {}
