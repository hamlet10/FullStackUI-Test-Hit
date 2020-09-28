import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShortenerServicesService {
  constructor(private _http: HttpClient, @Inject('API_URL') private apiUrl) {}

  getAllUrls(id: any): Observable<Array<any>> {
    return this._http.get<Array<any>>(this.apiUrl + 'url/' + `${id}`);
  }

  login(data: any): Observable<any> {
    let headeres = new HttpHeaders();
    headeres = headeres.set('Content-Type', 'application/json');
    const body = JSON.stringify(data);
    return this._http.post(this.apiUrl + 'auth/login', body, {
      headers: headeres,
    });
  }

  register(data: any): Observable<any> {
    let headeres = new HttpHeaders();
    headeres = headeres.set('Content-Type', 'application/json');
    const body = JSON.stringify(data);
    return this._http.post(this.apiUrl + 'auth/create', body, {
      headers: headeres,
    });
  }

  addVisitor(data: any): Observable<any> {
    let headeres = new HttpHeaders();
    headeres = headeres.set('Content-Type', 'application/json');
    const body = JSON.stringify(data);
    return this._http.post(this.apiUrl + 'visitors/create', body, {
      headers: headeres,
    });
  }

  createUrl(data: any): Observable<any> {
    console.log(data);

    let headeres = new HttpHeaders();
    headeres = headeres.set('Content-Type', 'application/json');
    const body = JSON.stringify(data);
    return this._http.post(this.apiUrl + 'url/CreateUrl', body, {
      headers: headeres,
    });
  }

  getIP(): Observable<any> {
    return this._http.get('https://api.ipify.org/?format=json');
  }
}
