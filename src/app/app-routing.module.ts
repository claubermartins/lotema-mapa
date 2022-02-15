import { FooterAreComponent } from './footer-are/footer-are.component';
import { NavbarAreaComponent } from './navbar-area/navbar-area.component';
import { QuestionComponent } from './quiz/question/question/question.component';
import { WelcomeComponent } from './quiz/welcome/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"navbar-area", component:NavbarAreaComponent},
  {path:"welcome", component:WelcomeComponent},
  {path:"question", component:QuestionComponent},
  {path:'', pathMatch:"full", redirectTo:'navbar-area'},
  //  {path:'', redirectTo:'navbar-area',pathMatch:"full"},
  //  {path:"welcome", component:WelcomeComponent},
  //  {path:"question", component:QuestionComponent}

  // {path:'', redirectTo:'welcome',pathMatch:"full"},
  // {path:"welcome", component:WelcomeComponent},
  // {path:"question", component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
