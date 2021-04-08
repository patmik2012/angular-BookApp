import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<mat-card><h1>{{name}}</h1></mat-card>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
