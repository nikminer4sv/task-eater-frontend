import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import {ProjectRoutingModule} from "./project-routing.module";
import { TaskComponent } from './components/task/task.component';



@NgModule({
  declarations: [
    ProjectComponent,
    TaskComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
  ]
})
export class ProjectModule { }
