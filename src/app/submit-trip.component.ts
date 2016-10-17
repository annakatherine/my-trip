import { Component } from '@angular/core';

@Component({
  selector: 'submit-trip',
  template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`
})


export class SubmitTripComponent {
  clickMessage = '';
  onClickMe() {
    this.clickMessage = 'Calculating Trip Time';
  }
  form: FormGroup;

ngOnInit() {
  this.form = new FormGroup({
    name: new FormControl('', Validators.required)),
    street: new FormControl('', Validators.minLength(3)),
    city: new FormControl('', Validators.maxLength(10)),
    zip: new FormControl('', Validators.pattern('[A-Za-z]{5}'))
  });
}
}
