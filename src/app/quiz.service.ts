import { Injectable } from '@angular/core';
import { Quiz } from './model/quiz';

@Injectable()
export class QuizService {

  quizList: Array<Quiz> = [
    {name: "quiz1", title: "Kedvenc ételeid", description: "válaszd ki a kedvenc ételed"},
    {name: "quiz2", title: "Kedvenc állataid", description: "válaszd ki a kedvenc állatod"},
    {name: "quiz3", title: "Kedvenc zenéid", description: "válaszd ki a kedvenc zenéd"},
    {name: "quiz4", title: "Kedvenc országaid", description: "válaszd ki a kedvenc országod"},
    {name: "quiz5", title: "Kedvenc embereid", description: "válaszd ki a kedvenc embered"},
    {name: "quiz6", title: "Kedvenc hőseid", description: "válaszd ki a kedvenc hősöd"},
    {name: "quiz7", title: "Kedvenc őseid", description: "válaszd ki a kedvenc ősöd"}
  ];

  constructor() { }

}
