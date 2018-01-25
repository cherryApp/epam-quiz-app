import { Injectable } from '@angular/core';
import { Quiz } from './model/quiz';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuizService {

  quizObserver: Observable<Quiz[]>;

  quizList: Array<Quiz> = [
    {name: "quiz1", title: "Kedvenc ételeid", description: "válaszd ki a kedvenc ételed"},
    {name: "quiz2", title: "Kedvenc állataid", description: "válaszd ki a kedvenc állatod"},
    {name: "quiz3", title: "Kedvenc zenéid", description: "válaszd ki a kedvenc zenéd"},
    {name: "quiz4", title: "Kedvenc országaid", description: "válaszd ki a kedvenc országod"},
    {name: "quiz5", title: "Kedvenc embereid", description: "válaszd ki a kedvenc embered"},
    {name: "quiz6", title: "Kedvenc hőseid", description: "válaszd ki a kedvenc hősöd", active: true},
    {name: "quiz7", title: "Kedvenc őseid", description: "válaszd ki a kedvenc ősöd"}
  ];

  constructor() {
    this.quizObserver = new Observable(observer => {
      setInterval( () => {
        let index = Math.floor(Math.random() * this.quizList.length);
        this.quizList[index].active = !this.quizList[index].active;
        observer.next(this.quizList);
      }, 1000);
    });
  }



}
