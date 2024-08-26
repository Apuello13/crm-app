import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { NotFoundComponent } from './pages/404/404.component';

import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    MatMenuModule,
    MatExpansionModule,
    RouterModule,
  ],
})
export class CoreModule {}
