import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../_model/login.model';
import { Router } from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';
import { Meter } from '../_model/meter.model';

@Injectable()
export class ApiService {
  private token = '';
  baseUrl = '/api';

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage['token']) {
      console.log('accesso');
      this.token = localStorage['token'];
    }
  }
  getAuthorizationToken() {
    return this.token;
  }

  logout() {
    this.token = '';
    localStorage.removeItem('token');
  }
  login(jsonIn: LoginModel) {
    const h = {
      'X-APIKEY': '98fdc3dee6759703e7afa7977e243874',
      'X-DEVICE-ID': '8cc5d79543db2888',
    };
    return this.http
      .get('/api/auth/mobile/login', {
        headers: h,
      })
      .pipe(
        tap((response: any) => {
          this.token = localStorage['token'] = response.token;
        })
      );
  }

  getMeterList() {
    const h = { 'Authorization': 'Bearer ' + this.token };
    return this.http
      .get(`/api/devices/me/meters`, {
        headers: h,
      })
      .pipe(
        map((response: any) => {
          return response.meters as Meter[];
        })
      );
  }
  getMeterDetail() {
    const h = { 'Authorization': 'Bearer ' + this.token };
    return this.http
      .get(`/api/devices/me/meters/`, {
        headers: h,
      })
      .pipe(
        map((response: any) => {
          return response.meters as Meter[];
        })
      );
  }

  getDevicesMeMeter(id: string) {
    const h = { 'Authorization': 'Bearer ' + this.token };
    return this.http.get('/api/devices/me/meters/' + id, { headers: h }).pipe(
      map((response: any) => {
        //debugger;
        return response as Meter;
      })
    );
  }
}
