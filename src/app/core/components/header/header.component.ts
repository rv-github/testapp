import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedTab = 'Home';
  constructor() { }

  ngOnInit() {
  }

  navClickHandler(value: string) {
    this.selectedTab = value;
  }

}
