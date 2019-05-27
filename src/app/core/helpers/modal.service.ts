import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalShowed = new Subject<string>();

  getModalShowed(): Observable<string> {
    return this.modalShowed.asObservable();
  }

  setModalShowed(data:string) {
    this.modalShowed.next(data);
  }
}
