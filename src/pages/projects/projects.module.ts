import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import {ProjectsRoutingModule} from "./projects-routing.module";
import { CardComponent } from './components/card/card.component';
import {SharedModule} from "../../shared/shared.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ToolbarComponent } from './components/toolbar/toolbar.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    CardComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    MatSnackBarModule,
  ]
})
export class ProjectsModule { }
