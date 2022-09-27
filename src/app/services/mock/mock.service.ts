import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Fruta{
  id: number;
  fruta: string;
  verdura: string;
}
@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http: HttpClient) {
    this.mockValues();
   }

  mockValues(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:3000/teste');
  }

  mockSave(data: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/teste', data);
  }

  mockEdit(){
    
  }
}
