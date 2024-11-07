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
    { images: ['/assets/images/palau.webp', '/assets/images/palau.webp', '/assets/images/palau.webp', 'path_to_image_4.jpg'], answer: 2 },
    { images: ['path_to_image_5.jpg', 'path_to_image_6.jpg', 'path_to_image_7.jpg', 'path_to_image_8.jpg'], answer: 1 },
    // Add more questions as needed
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
