import { Component } from '@angular/core';
import { Person } from './person';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private http: Http) { }
  str: Object = "";

  ngOnInit() {
    this.getData();
  };

  getData() {
    this.http.get('http://localhost:64257/api/values/getList')
      .map(res => res.json())
      .subscribe(
      data => this.str = data,
    );
  };


  gender = ['male', 'female', 'unknow']

  person = new Person(1, 'Malik', 18, this.gender[0], "");

  submitted = false;

  newHero() {
    var result = this.getData();

    this.submitted = true;
    this.person = new Person(0, '', 0, this.gender[0], '');
  }

}
