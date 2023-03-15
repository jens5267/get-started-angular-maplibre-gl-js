import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  readonly APIUrl = 'http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) {}

  getMarkers() {
    return this.http.get(this.APIUrl + 'markers/');
  }
}
