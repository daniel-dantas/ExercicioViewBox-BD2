import { County } from './../models/County';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { State } from 'src/app/models/State';

@Injectable({
  providedIn: 'root'
})
export class DataInfoService {

  private api = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  getStates(): Observable<State[]>{
    return this.http.get(`${this.api}/getStates`) as Observable<State[]>;
  }

  getCountys(siglaState: string): Observable<County[]>{
    return this.http.get(`${this.api}/getCitys/${siglaState}`) as Observable<County[]>;
  }

  getViewBox(municipioNome: string): Observable<string>{
    return (this.http.get(`${this.api}/getViewBox/${municipioNome}`) as Observable<any>)
    .pipe(map(result => result.getviewbox)) as Observable<string>;
  }

  getSVG(municipioNome: string): Observable<string>{
    return (this.http.get(`${this.api}/getSVG/${municipioNome}`) as Observable<any>)
    .pipe(map(result => result.st_assvg)) as Observable<string>;
  }

}
