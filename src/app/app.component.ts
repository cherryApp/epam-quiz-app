import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { Quiz } from './model/quiz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Quiz';
  quizList: Array<Quiz>;
  constructor(public qService: QuizService) {

  }

  ngOnInit() {
    this.quizList = this.qService.quizList;
  }
}
