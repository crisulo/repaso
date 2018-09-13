import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareInformationService {

  private subjectInfo$ : Subject<String[]>= new Subject<String[]>();
  public info$:Observable<String[]>;

  constructor() { 
    this.info$=this.subjectInfo$.asObservable();
  }

  sendInfo(info:String[]){
    this.subjectInfo$.next(info);
  }
}
