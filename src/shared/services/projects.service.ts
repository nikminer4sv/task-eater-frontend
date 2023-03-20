import { Injectable } from '@angular/core';
import {Project} from "../../pages/projects/models/project";
import {Observable, of} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = [
    {id: 1, title: "Raiffeisen 1"},
    {id: 2, title: "PixCreator 2"},
    {id: 3, title: "TaskEeater 3"},
    {id: 4, title: "Angular 4"},
    {id: 5, title: "Asp.net 5"},
    {id: 6, title: "GG 6"},
    {id: 7, title: "PixCreator 7"},
    {id: 8, title: "TaskEater 8"},
    {id: 9, title: "Angular 9"},
    {id: 10, title: "Asp.net 10"},
    {id: 11, title: "Asp.net 11"},
  ];

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  public getAllProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  public getProjectsInRange(start: number, count: number) {
    return of(this.projects.slice(start, start + count));
  }

  public getProjectById(id: number): Observable<Project> {
    let index = this.projects.findIndex(project => project.id == id);
    return of(this.projects[index]);
  }

  public remove(id: number): void {
    console.log(id);
    let index = this.projects.findIndex(project => project.id == id);
    let title = this.projects[index].title;
    this.projects.splice(index, 1);
    this.snackBar.open(`Project "${title}" was successfully deleted.`, undefined, {
      panelClass: ["info-snackbar"],
      duration: 2000
    });
  }

  public getProjectsAmount(): number {
    return this.projects.length;
  }

}
