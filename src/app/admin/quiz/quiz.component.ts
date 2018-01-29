import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../model/quiz';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { QuizService } from '../../quiz.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

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

  onSubmit(quiz: Quiz) {
    this.output = quiz;
    this.sent = true;
  }

}
