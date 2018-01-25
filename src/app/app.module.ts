import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizService } from './quiz.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    QuizListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
