import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild("burgerMenuCheckbox")
  private checkbox!: ElementRef;
  public hideBurgerMenu() {

    this.checkbox.nativeElement.checked = false;
  }

}
