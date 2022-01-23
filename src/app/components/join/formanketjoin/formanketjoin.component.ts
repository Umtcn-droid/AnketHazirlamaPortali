import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-formanketjoin',
  templateUrl: './formanketjoin.component.html',
  styleUrls: ['./formanketjoin.component.css']
})
export class FormanketjoinComponent implements OnInit {

  answerOptions = ['ABCD'];

  answer = '';

  public shares!: Observable<any[]>;

  constructor(private quizservice: QuizService) { }

  ngOnInit() {
    this.shares = this.getShares('/shares');

  }
  getShares(path) {
    return this.quizservice.getShares(path);
  }


  onAnswerInput(value:string){
    this.answer=value;
   }

}




