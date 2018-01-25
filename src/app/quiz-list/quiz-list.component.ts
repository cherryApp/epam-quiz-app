import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from '../model/quiz';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  @Input() list: Array<Quiz>;
  isActive: string;

  constructor() {}

  setActiveQuiz(quiz: Quiz) {
    this.isActive = quiz.name;
  }

  ngOnInit() {
    console.log( this.list );
  }

}
