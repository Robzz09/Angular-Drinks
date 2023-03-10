import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  drinks!: any[];
  cocktail!: string;
  firstsLetters:string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  letter:string = '';
  form!: FormGroup;
  @Output() searchcriteria = new EventEmitter<String>();
  constructor(private apiService: ApiService, private fb: FormBuilder){}

  ngOnInit(){
    //this.searchThis();
    this.form = this.fb.group({
      nome: new FormControl()
    });
  }

  searchThis() {
    console.log(this.form.value.nome);
    this.searchcriteria.emit(this.form.value.nome)
  } 
}
