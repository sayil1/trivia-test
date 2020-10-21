import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TriviaService } from '../trivia.service'
import { MatPaginator } from '@angular/material/paginator';
import { questions } from '../questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  // binf imported questions to object questions
  questions = questions
  randomQuestion = []
  answer = []
  total = 0
  timer = null
  details = null
  timeLeft: number = 60 * 5
  time
  interval;

  constructor(private _router: Router, private _dataService: TriviaService) {

  }


  ngOnInit(): void {
    // get user details from trivia service
    this.details = this._dataService.getDetails();

    // updates the timer per second
    this.count()

    // creates the radomized questions
    this.randQues()

   
  }

  count() {
// updates timer per sec
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.format(this.timeLeft)
      } else {
        this.submit()
      }
    }, 1000)
  }


  trackByIndex(index: number, obj: any): any {
    return index;
  }


  randQues() {

    // randomized questions
    for (var i = 0; i < 10; i++) {
      let data = this.questions;
      var rand = data[Math.floor(Math.random() * this.questions.length)];

      this.randomQuestion.push(rand);
    }

  

  }

  calculateTotal() {
    // grading is done here.. 
    this.total = 0
    for (let index = 0; index < this.randomQuestion.length; index++) {
     
      if (this.randomQuestion[index].answer == this.answer[index]) {
      //  increment total by 1
        this.total = this.total + 1
      } else {
       
      }

    }
    console.log(this.total)
    // set total into Trivia service
    this._dataService.setOption('total', this.total);

  }


  // format time given in readable mins, secs
  format(time) {
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    this.time = ret
  }


// submits the answers
  submit() {
    this.calculateTotal()
    this._router.navigate(['result'])
    clearInterval(this.timer);
  }
}
