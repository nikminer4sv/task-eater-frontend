import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import {ProjectsRoutingModule} from "./projects-routing.module";
import { CardComponent } from './components/card/card.component';
import {SharedModule} from "../../shared/shared.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatPaginatorModule} from "@angular/material/paginator";



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
        MatPaginatorModule,
    ]
})
export class ProjectsModule { }
