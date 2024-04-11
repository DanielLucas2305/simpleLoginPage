import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Users } from './models/aula.model';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  constructor(private http: HttpClient) { }

  authenticate(data: Users){
    return this.http.post<Users>(environment.API_URL + "/login", data)
  }
}
