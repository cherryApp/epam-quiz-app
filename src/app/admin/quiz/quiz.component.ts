import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../model/quiz';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { QuizService } from '../../quiz.service';
import 'rxjs/add/operator/switchMap';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {

  quiz: Observable<Quiz>;
  output: Quiz;
  sent: boolean = false;

  constructor(
    private aRoute: ActivatedRoute,
    public qService: QuizService) {
      this.quiz = this.aRoute.params.switchMap(
        param => this.qService.getOne(param.id)
      );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  onSubmit(quiz: Quiz) {
    this.output = quiz;
    this.sent = true;
  }

  deleteQuestion(ev: MouseEvent, quiz, question): void {
    ev.preventDefault();
    ev.stopImmediatePropagation();
    ev.stopPropagation();
    console.log(quiz, question);
    quiz.questions.splice(quiz.questions.indexOf(question), 1);
    return quiz;
  }

}
