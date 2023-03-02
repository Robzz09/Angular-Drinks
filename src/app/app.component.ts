import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.scss'],
   template: `
    <block-ui>
    </block-ui>
  `
})
export class AppComponent {
  @BlockUI() blockUI!: NgBlockUI;
  constructor(){
    this.blockUI.start('Loading...'); // Start blocking
 
    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 2000);
  }


  title = 'my-app';
  title2= 'bella zi';
  count = 0 ;
  prodottiSelezionati = [1,44,55];
  prodotti = [{},{},{}];
  cambia(){
    this.title = this.title2;
    this.prodottiSelezionati.forEach(function (p){
      alert(p);
      console.log(p);
    })
  }
  diminuisci(){
    this.count--;
  }
  aumenta(){
    this.count++;
  }
}
