import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Project} from "../projects/models/project";
import {ProjectsService} from "../../shared/services/projects.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public project!: Project;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}
  ngOnInit(): void {
    let id: string | null = this.route.snapshot.paramMap.get('id');
    if (id !== null)
      this.projectsService.getProjectById(parseInt(id)).subscribe(project => this.project = project);
  }
}
