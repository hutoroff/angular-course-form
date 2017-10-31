import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {tabs} from "../../../conf/ui"

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  @Output()
  public tabSelection: EventEmitter<string> = new EventEmitter();

  public tabs: Tab[] = tabs;


  public ngOnInit(): void {
    this.tabClick(tabs[0].id);
  }

  public tabClick(tabId: string): void {
    this.unmarkCurrentActiveTab();
    this.markTabActive(tabId);
    this.tabSelection.emit(tabId);
  }

  private unmarkCurrentActiveTab(): void {
    const curActiveIndex: number = this.tabs.findIndex((el: Tab) => el.active);
    if(curActiveIndex !== -1) {
      this.tabs[curActiveIndex].active = false;
    }
  }

  private markTabActive(tabId: string): void {
    const tabIndex = this.tabs.findIndex((el: Tab) => el.id === tabId);
    this.tabs[tabIndex].active = true;
  }
}
