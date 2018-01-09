import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppComponent } from './app.component';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './PersonInfo/add/add.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent }
  
];

@NgModule({
  
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
