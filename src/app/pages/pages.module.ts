import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [PagesComponent, HeaderComponent, SideMenuComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
  ],
})
export class PagesModule {}
