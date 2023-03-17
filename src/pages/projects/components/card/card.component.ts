import {Component, Input} from '@angular/core';
import {ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input("title")
  public title!: string;

  @Input("id")
  public id!: number;

  constructor(
    private projectsService: ProjectsService
  ) {
  }

  public delete(id: number) {
    this.projectsService.remove(id);
  }

}
