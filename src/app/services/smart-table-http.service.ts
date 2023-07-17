import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SmartTableHttpService {

  constructor(private httpService: HttpClient) { }

  getTableData(): Observable<any[]> {
    return this.httpService.get<any[]>(`https://fakestoreapi.com/products`)
  }
}
