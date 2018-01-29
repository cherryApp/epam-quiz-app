export interface Question {
  _id?: string,
  name: string,
  title: string,
  content: string,
  description: string,
  answers: [{correct: boolean, content: string}]
}
