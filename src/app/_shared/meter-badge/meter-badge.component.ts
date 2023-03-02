import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meter } from 'src/app/_model/meter.model';

@Component({
  selector: 'app-meter-badge',
  templateUrl: './meter-badge.component.html',
  /*
    styleUrls: ['./app.component.scss']
  */
})
export class MeterBadgeComponent implements OnInit {
 
 @Input() meter:Partial<Meter> = {};
 @Input() disabled = false;
 @Output() onDelete = new EventEmitter();
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
 
  }
  delete(){
    this.onDelete.emit(this.meter.id);
  }
}
