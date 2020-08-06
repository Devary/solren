import { Component, OnInit } from '@angular/core';
import {Tab} from "../model/tab";
import {TabService} from "../services/tabService";

@Component({
  selector: 'app-solife-tables-render',
  templateUrl: './solife-tables-render.component.html',
  styleUrls: ['./solife-tables-render.component.scss']
})
export class SolifeTablesRenderComponent implements OnInit {

  tabs : Tab[];
  tab : Tab = new Tab();
  constructor(private tabService : TabService) { }

  ngOnInit() {
    this.ngAfterViewInit()

  }
  addNewTab() {
    // this.tabs.(this.tab);
  }
  ngAfterViewInit() {
    this.tabService.getAllUsers().subscribe((data: Tab[]) => this.tabs = data);
  }

}
