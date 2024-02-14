import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  @Input() name: any;
  @Input() subject: any;
  @Input() name1: any;
  @Input() obj: any;

}
