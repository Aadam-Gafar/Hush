import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Component imports
import { AppComponent } from './app.component';
import { ChipsComponent } from './chips/chips.component';
import { CardsComponent } from './cards/cards.component';

// Angular Material imports
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatChipsModule } from '@angular/material/chips'
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ChipsComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatChipsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
