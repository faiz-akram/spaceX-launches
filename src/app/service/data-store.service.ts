import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  fetchedData;
  


  constructor(private httpClient : HttpClient) { }

  
  fetchInitialData(){
    this.fetchedData =  this.httpClient.get('https://api.spacexdata.com/v3/launches?limit=100');
    return this.fetchedData;
  }
 
}
