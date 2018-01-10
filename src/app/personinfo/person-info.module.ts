import { NgModule, Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { HttpModule } from '@angular/http';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import {FormsModule} from '@angular/forms';
import { Headers} from '@angular/http';

//#region PersonInfoComponent

@Component({
  template:'<router-outlet></router-outlet>'
})
export class PersonInfoComponent { }

//#endregion

//#region 路由配置

const router: Routes = [
  {
    path: '',
    component: PersonInfoComponent,
    children: [
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'edit',
        component: EditComponent
      },
    ],
  }];

//#endregion

//#region PersonInfoMoudle

@NgModule({
  imports: [
    RouterModule.forChild(router),
    CommonModule,
    HttpModule,
    FormsModule,
    Headers
  ],
  declarations: [
    PersonInfoComponent,
    AddComponent,
    DetailComponent,
    ListComponent,
    EditComponent,
   
  ],
})
export class PersonInfoMoudle { }

//#endregion