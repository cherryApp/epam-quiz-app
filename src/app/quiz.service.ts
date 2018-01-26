import { Injectable } from '@angular/core';
import { Quiz } from './model/quiz';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {
  apiUrl: string = "http://localhost:3999/quiz";
  quizSubject: Subject<Quiz[]> = new Subject();

  private quizList: Array<Quiz> = [
    {name: "quiz1", title: "Kedvenc ételeid", description: "válaszd ki a kedvenc ételed"},
    {name: "quiz2", title: "Kedvenc állataid", description: "válaszd ki a kedvenc állatod"},
    {name: "quiz3", title: "Kedvenc zenéid", description: "válaszd ki a kedvenc zenéd"},
    {name: "quiz4", title: "Kedvenc országaid", description: "válaszd ki a kedvenc országod"},
    {name: "quiz5", title: "Kedvenc embereid", description: "válaszd ki a kedvenc embered"},
    {name: "quiz6", title: "Kedvenc hőseid", description: "válaszd ki a kedvenc hősöd", active: true},
    {name: "quiz7", title: "Kedvenc őseid", description: "válaszd ki a kedvenc ősöd"}
  ];

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.apiUrl);
  }

  create(quiz?: Quiz): void {
    this.http.post(this.apiUrl, {}).forEach( (value) => {
      console.log("post complete: ", value);
    });
  }



}
