import { Injectable } from '@angular/core';
import {SmartTableHttpService} from "./smart-table-http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SmartTableDataService {

  constructor(private smartTableHttpService: SmartTableHttpService) { }

  getTableData(): Observable<any[]> {
    return this.smartTableHttpService.getTableData();
  }
}
