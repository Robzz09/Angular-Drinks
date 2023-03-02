import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../_service/api.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private apiService: ApiService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq;
    if (req.url.indexOf('/login') === -1) {
      // clono la request e ci aggiungo gli headers
      const authToken = this.apiService.getAuthorizationToken();
      authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + authToken)
      });
    } else {
      // nella login non devo passare il token, anzi devo evitarlo perche' potrei passarne uno scaduto
      authReq = req;
    }
    // faccio andare avanti Angular
    return next.handle(authReq);
  }
}