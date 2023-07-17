import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {StringComponent} from "../string/string.component";
import {HostDirective} from "../../directives/host.directive";

@Component({
  selector: '[app-td]',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.scss']
})
export class TdComponent implements OnInit{
  @Input()
  td!: any;

  @ViewChild(HostDirective, {static: true}) host!: HostDirective;

  ngOnInit(): void {
    const viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<StringComponent>(StringComponent);
    componentRef.instance.data = this.td;
  }
}
