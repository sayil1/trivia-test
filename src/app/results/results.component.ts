import { Component, OnInit, Input} from '@angular/core';
import {TriviaService} from '../trivia.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() result: string;

  public data;  
  percentage
  comment

  constructor(private _dataService: TriviaService) {
    // debugger;  
 
   }

  ngOnInit(): void {
    // get user score
    this.data = this._dataService.getOption();  

    // converts score to percentage
    this.percentage = (this.data / 10) * 100
    console.log(this.percentage)
if (this.percentage < 75) {
  this.comment = "failed.. try again"
} else {
  this.comment = "Success.. "
}

  }

}
