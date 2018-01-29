import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from '../model/quiz';
import { Observable } from 'rxjs/Observable';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  @Input() list: Observable<Quiz[]>;
  isActive: Quiz;
  phrase: string = "";
  activeCheck: boolean = false;

  constructor(private qService: QuizService, private router: Router) {}

  setActiveQuiz(quiz: Quiz) {
    this.isActive = quiz;
  }

  jumpToQuiz(ev, quiz: Quiz): void {
    ev.preventDefault();
    this.router.navigateByUrl('/quiz/'+quiz._id);
  }

  ngOnInit() {
    this.list = this.qService.getAll();
  }

  getQuizes() {
    this.qService.getAll();
  }

  postQuiz(): void {
    this.qService.create();
  }

}
