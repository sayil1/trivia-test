import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor() { }

 data = '';
 details = ""

//  sets user score
  setOption(option, value) {
    this.data = value;
    console.log(value, "is the value")
  }

  // get user scores
  getOption() {
    return this.data;
  }

  // sets user info
  setDetails(option, value){
    this.details = value;
    console.log(value, "is the value")
  }

  // get user info
  getDetails() {
    return this.details;
  }
}
