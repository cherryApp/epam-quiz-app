import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from '../model/quiz';
import { Observable } from 'rxjs/Observable';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  @Input() list: Observable<Quiz[]>;
  isActive: string;
  phrase: string = "";
  activeCheck: boolean = false;

  constructor(private qService: QuizService) {}

  setActiveQuiz(quiz: Quiz) {
    this.isActive = quiz.name;
  }

  ngOnInit() {
    console.log( this.list );
  }

  getQuizes() {
    this.qService.getAll();
  }

  postQuiz(): void {
    this.qService.create();
  }

}
