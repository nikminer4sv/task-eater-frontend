import {Component, OnChanges, OnInit} from '@angular/core';
import {Project} from "./models/project";
import {ProjectsService} from "./services/projects.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects!: Project[];

  constructor(
    private projectsService: ProjectsService,
  ) {
  }

  ngOnInit() {
    this.projectsService.getAllProjects().subscribe(projects => this.projects = projects);
  }

}
