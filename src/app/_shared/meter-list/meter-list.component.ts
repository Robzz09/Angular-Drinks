import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meter } from 'src/app/_model/meter.model';

@Component({
  selector: 'app-meter-list',
  templateUrl: './meter-list.component.html',
  /*
    styleUrls: ['./app.component.scss']
  */
})
export class MeterListComponent implements OnInit {
 
 @Input() meter:Partial<Meter> = {};
 @Input() disabled = false;
 @Output() onDelete = new EventEmitter();
 @Output() onSelect = new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
 
  }
  delete(){
    this.onDelete.emit(this.meter.id);
  }
  select(meter: Partial<Meter>){
    this.onSelect.emit(meter);
  }
}
