import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  constructor(private http:Http) { }

  model = {
    people:{
      id: 0,
      name: "",
      age: 0,
      sex: "male",
      personinfo: ""
    }
  };
  
  gender = ['male', 'female', 'unknow'];

  ngOnInit() {
    
  }
 
  createPeople() {
  
  };
  
}