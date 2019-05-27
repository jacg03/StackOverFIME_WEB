import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public credentials = new Subject<any>();

  getCredentials(): Observable<any> {
    return this.credentials.asObservable();
  }

  setCredentials(data) {
    this.credentials.next(data);
  }
}
