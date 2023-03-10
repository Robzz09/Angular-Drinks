import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-drinks-page',
  templateUrl: './drinks-page.component.html',
  styleUrls: ['./drinks-page.component.scss']
})
export class DrinksPageComponent {
  @Input() drink: any;
  @Output() searchcriteria = new EventEmitter<String>();

  // @Input() featured = false;
  // @Output() onSelectChange: EventEmitter<boolean> = new EventEmitter();
}
