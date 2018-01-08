import { Component } from '@angular/core';
import { Person } from './person';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private http:Http){

  }

  ngOninit(){
 this.getData();
  }

getData(){
var headers=new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Origin','*');
headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
headers.append(  'Access-Control-Allow-Headers', 'X-Requested-With,content-type');
headers.append('Access-Control-Allow-Credentials', 'true' );

  this.http.get('http://localhost:64257/api/values/getList')
  .map(res => res.text())
  .subscribe( 
  data=>data, 
  err=>console.log(err),
  () => console.log('Random Quote Complete')
);
}

// sendData(data){
//   var headers = new Headers();
//   headers.append('Content-Type', 'application/x-www-form-urlencoded');
//   this.http.post('','',)
// }


  gender=['male','female','unknow']

  person=new Person(1,'Malik',18,this.gender[0],"");

  submitted=false;

  newHero() {
    this.getData();
   
  this.submitted=true;
  this.person = new Person(0, '',0, this.gender[0],'');
  }

}
