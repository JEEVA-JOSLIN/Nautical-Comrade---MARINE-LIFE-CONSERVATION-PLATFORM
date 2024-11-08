import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.generateQuestion();
  }

  questions = [
    { images: ['/assets/images/quiz/q2/answer.png', '/assets/images/quiz/q2/i1.png', '/assets/images/quiz/q2/i2.png', '/assets/images/quiz/q2/i3.png'], answer: 1 },
    {images: ['/assets/images/quiz/q3/i1.png', '/assets/images/quiz/q3/i2.png','/assets/images/quiz/q3/answer.png', '/assets/images/quiz/q3/i3.png'], answer: 3 },
    {images: ['/assets/images/quiz/q4/i1.png', '/assets/images/quiz/q4/i2.png','/assets/images/quiz/q4/i3.png', '/assets/images/quiz/q4/answer.png'], answer: 4 },
    {images: ['/assets/images/quiz/q5/i1.png', '/assets/images/quiz/q5/answer.png','/assets/images/quiz/q5/i2.png', '/assets/images/quiz/q5/i5.png'], answer: 2 },
    {images: ['/assets/images/quiz/q6/answer.png', '/assets/images/quiz/q6/i1.png','/assets/images/quiz/q6/i2.png', '/assets/images/quiz/q6/i3.png'], answer: 1 },
    {images: ['/assets/images/quiz/q7/i1.png', '/assets/images/quiz/q6/i2.png','/assets/images/quiz/q7/answer.png', '/assets/images/quiz/q7/i3.png'], answer: 3 }
  ];

  currentQuestionIndex: number = 0;
  selectedAnswer: number = -1;
  score: number = 0;

  generateQuestion() {
    this.selectedAnswer = -1;
    this.currentQuestionIndex = Math.floor(Math.random() * this.questions.length);
  }

  checkAnswer() {
    if (this.selectedAnswer === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
      alert("YOU ARE CORRECT!!!")
    } else {
      alert("Oops!! Try Again! ");
    }
    this.generateQuestion();
  }
}
