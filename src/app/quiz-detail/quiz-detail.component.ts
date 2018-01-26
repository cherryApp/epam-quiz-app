import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RouterState } from '@angular/router/src/router_state';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {
  quizId: Observable<number>;
  constructor(private aRoute: ActivatedRoute) {
    this.quizId = this.aRoute.params.map(p => p.id);
  }

  ngOnInit() {
  }

}
