import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        SidebarComponent, NavbarComponent
    ],
    providers: [],
    exports: [SidebarComponent, NavbarComponent]
  })
  export class UtilitiesModule { }