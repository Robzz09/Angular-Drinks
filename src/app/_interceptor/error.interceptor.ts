import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from "rxjs";
import { ApiService } from "../_service/api.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private apiService: ApiService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req)
      .pipe(
        tap({
          error: (error) => {
            if(error.status === 401) {
              alert('Non autorizzato o sessione scaduta. Loggarsi prima di procedere');
              this.apiService.logout();
              this.router.navigateByUrl('/login');
            } else if(error.body && error.body.message) { // il backend ha inviato un JSON nella risposta di errore
              alert('Errore di backend: ' + error.body.message);
            } else if(!error.body) { // il backend non ha inviato un JSON nella risposta di errore
              alert('Errore di backend generico');
            } else if (error.status === 0) { // il backend non ha risposto
              alert('Errore di connessione, server non raggiungibile');
            } else { // non dovrebbe capitare
              alert('Errore sconosciuto')
            }
          }
        }),
      );
  }
}