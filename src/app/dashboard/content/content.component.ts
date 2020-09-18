import { Component, Input, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/service/data-store.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  initialData;
  nestedItems;
  apiURL : string;
  @Input() FilteredData;
  constructor(private _dataStore : DataStoreService) { }

  ngOnInit(): void {
    
    this._dataStore.fetchInitialData().subscribe(data=>{
      this.initialData = data;
    });
    
  
  }

  getFirteredData(){
    
      this.initialData = this.FilteredData;

      this.nestedItems = Object.keys(this.initialData).map(key => {
        return this.initialData[key];
      });
   }
 }

