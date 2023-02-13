import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Component imports
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';

// Angular Material imports
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatChipsModule } from '@angular/material/chips'
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider'

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatChipsModule,
    MatCardModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
