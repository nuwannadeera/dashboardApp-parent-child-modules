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

  array = [1, 2, 3, 4, 1, 2, 3, 4, 8, 9];
  newArr: any = [];

  ngOnInit() {
// foreach to remove duplicate in array
    this.array.forEach((no, index) => {
      if (this.array.indexOf(no) === index) {
        this.newArr.push(no);
      }
    });
    console.log('newArr');
    console.log(this.newArr);
  }
}
