import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizService } from './quiz.service';
import { QuizFilterPipe } from './quiz-list/quiz-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    QuizListComponent,
    QuizFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
