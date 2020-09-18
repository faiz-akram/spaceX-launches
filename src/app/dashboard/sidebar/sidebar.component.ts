import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStoreService } from 'src/app/service/data-store.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  year : number;
  yearSel : number =0;
  launchSel : boolean = null;
  filteredData;
  landSel :boolean = null;
  apiUrl :string = 'https://api.spacexdata.com/v3/launches?limit=100';
  @Output() emitData = new EventEmitter();

  constructor(private _filterService : DataStoreService,
     private http : HttpClient,
     private _router : Router) { }

  ngOnInit(): void {
    let urlFilter = `${this.apiUrl}${this.yearSel === 0 ? 0 : `&launch_year=${this.yearSel}`}${this.launchSel === null ? '' : `&launch_success=${this.launchSel}`}${this.landSel === null ? '' : `&land_success=${this.landSel}`}`;
    
    this.http.get(urlFilter).subscribe(data=>{
      this.filteredData = data;
      this.emitData.emit(this.filteredData);
    })
  }


  activateYearBtn(yearSelected){
    this.yearSel === yearSelected ? this.yearSel = 0 : this.yearSel = yearSelected;
    //console.log(yearSelected);
    this.filterAndNavigate()
  }
  activateLaunchStatus(SelectedlaunchStatus){
    this.launchSel === SelectedlaunchStatus ? this.launchSel = null : this.launchSel = SelectedlaunchStatus;
    this.filterAndNavigate()
  }
  activateLandStatus(selectedLandStatus){
    this.landSel === selectedLandStatus ? this.landSel = null : this.landSel = selectedLandStatus;
    this.filterAndNavigate()
  }

  filterAndNavigate(){
    let urlFilter = `${this.apiUrl}${this.yearSel === 0 ? 0 : `&launch_year=${this.yearSel}`}${this.launchSel === null ? '' : `&launch_success=${this.launchSel}`}${this.landSel === null ? '' : `&land_success=${this.landSel}`}`;
    
    this.http.get(urlFilter).subscribe(data=>{
      this.filteredData = data;
      this.emitData.emit(this.filteredData);

      if(this.yearSel !== 0  && this.launchSel === null && this.landSel === null){
        this._router.navigate(['filter-by-year'])
      }
      if(this.yearSel !== 0  && this.launchSel !== null && this.landSel === null){
        this._router.navigate(['filter-by-year-and-launch'])
      }
      if(this.yearSel !== 0  && this.launchSel !== null && this.landSel !== null){
        this._router.navigate(['filter-by-year-and-land'])
      }
      if(this.yearSel !== 0  && this.launchSel !== null && this.landSel !== null){
        this._router.navigate(['filter-by-all'])
      }
      if(this.yearSel === 0  && this.launchSel !== null && this.landSel !== null){
        this._router.navigate(['filter-by-launch-and-land'])
      }
      if(this.yearSel == 0  && this.launchSel !== null && this.landSel === null){
        this._router.navigate(['filter-by-launch'])
      }
      if(this.yearSel == 0  && this.launchSel === null && this.landSel !== null){
        this._router.navigate(['filter-by-land'])
      }
    })
    
    
  }

}
