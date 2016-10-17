import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello My-Trip';
  lat: number = 44.959764;
  lng: number = -93.285802;
}
