import {Component, OnChanges, OnInit} from '@angular/core';
import {Project} from "./models/project";
import {ProjectsService} from "../../shared/services/projects.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projectsAmount!: number;
  public projects!: Project[];
  public projectsSub!: Subscription;

  constructor(
    private projectsService: ProjectsService,
  ) {
  }

  ngOnInit() {
    this.projectsSub = this.projectsService.getProjectsInRange(0, 10).subscribe(projects => this.projects = projects);
    this.projectsAmount = this.projectsService.getProjectsAmount();
  }

  public lastPageIndex: number = 0;
  public lastPageSize: number = 10;
  public handlePage(event: any) {
    this.projectsSub.unsubscribe();
    this.lastPageSize = event.pageSize;
    this.lastPageIndex = event.pageIndex;
    this.updateData(this.lastPageIndex, this.lastPageSize);
  }

  private updateData(start: number, count: number) {
    this.projectsAmount = this.projectsService.getProjectsAmount();
    this.projectsSub = this.projectsService.getProjectsInRange(start * count, count).subscribe(projects => this.projects = projects);
  }

  public removeAction() {
    this.updateData(this.lastPageIndex, this.lastPageSize)
  }

}
