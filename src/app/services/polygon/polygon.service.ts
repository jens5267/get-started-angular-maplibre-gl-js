import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PolygonService {
  readonly APIUrl = 'http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) {}

  getPolygons() {
    return this.http.get(this.APIUrl + 'polygon/');
  }
}
