import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http: Http) { }

  peopleList: Object = "";

  ngOnInit() {
    //获取数据
    this.getPeopleList();
  }

  getPeopleList() {
    this.http.get('http://localhost:64257/api/values/getList')
      .map(res => res.json())
      .subscribe(
      data => this.peopleList = data,
    );
  };


}
