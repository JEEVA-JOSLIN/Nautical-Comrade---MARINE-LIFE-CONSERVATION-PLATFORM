import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Question {
  imageUrl: string;
  options: string[];
  correctAnswerIndex: number;
}


@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  questions: Question[] = [
    {
      imageUrl: '/assets/images/palau.webp',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      correctAnswerIndex: 2
    },
    {
      imageUrl: 'path_to_image_2.jpg',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      correctAnswerIndex: 1
    },
    // Add more questions as needed
  ];

  currentQuestionIndex = 0;
  selectedAnswer: number | null = null;
  score = 0;
  quizComplete = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectAnswer(index: number): void {
    this.selectedAnswer = index;
  }

  nextQuestion(): void {
    if (this.selectedAnswer !== null) {
      if (this.selectedAnswer === this.questions[this.currentQuestionIndex].correctAnswerIndex) {
        this.score++;
      }
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.quizComplete = true;
      } else {
        this.currentQuestionIndex++;
        this.selectedAnswer = null;
      }
    }
  }
}
