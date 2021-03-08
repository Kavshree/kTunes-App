import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { NavbarComponent } from './navbar.component';
import { ScrollCards } from './scrollCards.component'

@NgModule({
    imports: [CommonModule],
    declarations: [
        SidebarComponent, NavbarComponent, ScrollCards
    ],
    providers: [],
    exports: [SidebarComponent, NavbarComponent, ScrollCards]
  })
  export class UtilitiesModule { }