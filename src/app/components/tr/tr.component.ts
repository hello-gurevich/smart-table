import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-tr]',
  templateUrl: './tr.component.html',
  styleUrls: ['./tr.component.scss']
})
export class TrComponent {
  @Input()
  tr!: any[];

}
