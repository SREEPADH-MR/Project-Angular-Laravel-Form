import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModelDrivenFormsService {

  constructor(
    private http: HttpClient
  ) { }

  public baseUrl: string = 'http://127.0.0.1:8000/api/';

  create(data = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + 'create', data).subscribe((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  read(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + 'read/' + `${id}`).subscribe((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }
}
