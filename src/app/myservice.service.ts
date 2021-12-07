import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/photos");
  }
}

