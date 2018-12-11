import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.stateService.go('Home.HomeComponent');
  }

}
