import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UtilitiesModule } from './utilities/utilities.module'

import { AppComponent } from './app.component';

declare var $: any;
console.log(`jQuery version: ${$.fn.jquery}`);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, UtilitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
