import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModel } from '../models/data.model';
import { RegisterModel } from '../models/register.model';


@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private _httpClient: HttpClient) {}

  register(register: DataModel<RegisterModel>): Observable<RegisterModel> {
    return this._httpClient.post<RegisterModel>(
      'https://us-central1-courses-auth.cloudfunctions.net/auth/register',
      register
    );
  }
}
