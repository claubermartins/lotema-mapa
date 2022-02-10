import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarAreaComponent } from './navbar-area/navbar-area.component';
import { FooterAreComponent } from './footer-are/footer-are.component';
import { FormAreaComponent } from './form-area/form-area.component';
import { HeaderComponent } from './quiz/header/header/header.component';
import { WelcomeComponent } from './quiz/welcome/welcome/welcome.component';
import { QuestionComponent } from './quiz/question/question/question.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarAreaComponent,
    FooterAreComponent,
    FormAreaComponent,
    HeaderComponent,
    WelcomeComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
