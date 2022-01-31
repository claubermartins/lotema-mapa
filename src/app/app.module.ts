import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarAreaComponent } from './navbar-area/navbar-area.component';
import { FooterAreComponent } from './footer-are/footer-are.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarAreaComponent,
    FooterAreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
