import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModel } from '../models/data.model';
import { LoginModel } from '../models/login.model';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private _httpClient: HttpClient) {
  }

  loginCredentials(login: DataModel<LoginModel>): Observable<LoginModel> {
    return this._httpClient.post<LoginModel>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', login);
  }
}
