import { Component } from '@angular/core';

@Component({
  selector: 'common-component',
  template: `
    <div>common component</div>
  `
})
export class CommonComponent {
  constructor(){
    console.log("App has started")
  }
}