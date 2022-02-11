import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FooterComponent } from './componets/footer/footer.component';
import { LayoutComponent } from './componets/layout.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CollapseModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
