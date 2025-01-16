import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes this service globally available
})
export class NmapService {
  private baseUrl = 'http://localhost:8000/api/scan/';

  constructor(private http: HttpClient) {}

  scanTarget(target: string, flags: string): Observable<any> {
    return this.http.post(this.baseUrl, { target, flags });
  }
}
