import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ProjectsService} from "../../../../shared/services/projects.service";
import {MatCard} from "@angular/material/card";

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

  @Output()
  public removeEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild("matCard")
  public card!: ElementRef;
  public deleted: boolean = false;

  constructor(
    private projectsService: ProjectsService
  ) {}

  public delete() {
    this.projectsService.remove(this.id);
    this.deleted = true;
    this.removeEvent.emit();
  }

}
