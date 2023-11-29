import { Component, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';

interface SideNavOpt {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Input() collapsed: boolean = false;
  @Output() collapsedChange = new EventEmitter();
  collapsedAction = true;
  screenWidth = 0;
  icon = true;

  ngOnInit():void{
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse():void{
    this.collapsed = !this.collapsed;
    this.icon = !this.icon;
    this.collapsedChange.emit(this.collapsed); //
  }
}
