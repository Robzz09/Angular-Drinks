import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginModel} from "../_model/login.model";
import {ApiService} from "../_service/api.service";


@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  /*
    styleUrls: ['./app.component.scss']
  */
})
export class LoginComponent implements OnInit{
  pending = false;
  jsonIn: LoginModel = {
    'username': 'rob',
    'password': 'bbc',
  }
  meters: any = [];

  constructor(private router: Router, private apiService: ApiService) {
  }
  ngOnInit() {

  }
  submit() {
    this.pending = true;
    this.apiService
      .login(this.jsonIn) //mi restituisce un observable
      .subscribe((response) => { //oggetto dell'api.service.ts dentro response / per monitorare i dati uso la susbscribe
      this.meters = response.meters;
      this.router.navigate(['home'])
        //  console.log("risposta!", response);
      }, (error) => {
        this.pending = false;
       console.log("errore",error)
      })
    /*    if(this.jsonIn.username === 'rob' || this.jsonIn.password === 'bbc'){
          this.router.navigate(['home'])
        }*/
  }

}
