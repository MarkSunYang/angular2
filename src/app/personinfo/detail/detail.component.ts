import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private http: Http,private route:ActivatedRoute) { }

  _people:Object="";
  id:number;
  private sub:any;

  ngOnInit() {
    this.sub=this.route.params.subscribe(parames=>{
      this.id=parames['id'];
      console.log(parames);
    });
    this.getPeople();
  }

  getPeople() {
    this.http.get(`http://localhost:64257/api/values/GetPeopleById/${this.id}`)
      .map(res => res.json())
      .subscribe(
      data => this._people = data,
    );
  };

}
