import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataFromFilter;
  @Input() FilteredData
  constructor() { }

  ngOnInit(): void {
  }
  setFilterData(data){
    this.dataFromFilter = data;
  }

}
