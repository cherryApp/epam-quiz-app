import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizService } from './quiz.service';
import { QuizFilterPipe } from './quiz-list/quiz-filter.pipe';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';

// Setup routing roles.
const routeConfig: Routes = [
  {
    path: "",
    component: QuizListComponent
  },
  {
    path: "quiz/:id",
    component: QuizDetailComponent
  },
  {
    path: "**",
    component: QuizListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    QuizListComponent,
    QuizFilterPipe,
    QuizDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
