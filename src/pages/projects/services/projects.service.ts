import { Injectable } from '@angular/core';
import {Project} from "../models/project";
import {Observable, of} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = [
    {id: 1, title: "Raiffeisen"},
    {id: 2, title: "PixCreator"},
    {id: 3, title: "TaskEeater"},
    {id: 4, title: "Angular"},
    {id: 5, title: "Asp.net"},
  ];

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  public getAllProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  public remove(id: number): void {
    let index = this.projects.findIndex(project => project.id == id);
    let title = this.projects[index].title;
    this.projects.splice(index, 1);
    this.snackBar.open(`Project "${title}" was successfully deleted.`, undefined, {
      panelClass: ["info-snackbar"],
      duration: 2000
    });
  }

}
