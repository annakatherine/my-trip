import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SubmitTripComponent } from './submit-trip.component';
import {
  KeyUpComponent_v3,
} from './keyup.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    SubmitTripComponent,
    KeyUpComponent_v3,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
        key: 'AIzaSyAZZbmPJfPPVxgIX9fQHzd_2Aj4peuTD7A'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
