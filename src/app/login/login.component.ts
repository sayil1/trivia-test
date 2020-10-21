import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _dataService: TriviaService, private _router: Router) { }

  ngOnInit(): void {
  }
  
    name:""
    id:""
  


  proceed(){
    let details = {
      name:this.name,
      id:this.id
    }
    this._dataService.setDetails('total', details);
    this._router.navigate(['question'])
  }
}
