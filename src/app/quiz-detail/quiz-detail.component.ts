import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RouterState } from '@angular/router/src/router_state';
import { Route } from '@angular/router/src/config';
import { Quiz } from '../model/quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {
  quizId: Observable<number>;
  quiz: Quiz = ({} as Quiz);
  constructor(private aRoute: ActivatedRoute, private qService: QuizService) {
    this.aRoute.params.subscribe( (p) => {
      this.qService.getOne(p.id).subscribe( (quiz: Quiz) => {
        this.quiz = quiz;
      });
    });
  }

  ngOnInit() {
  }

}
