import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }

  volumeBird: any;
  volumeRain: any;
  volumeCoffee: any;
  volumePark: any;
  volumeFire: any;
  volumeStorm: any;

  changeVolume(event: any, cardName: string) {
    switch(cardName) {
      case 'bird':
        this.volumeBird = event.value;
        break;
      case 'rain':
        this.volumeRain = event.value;
        break;
      case 'coffee':
        this.volumeCoffee = event.value;
        break;
      case 'park':
        this.volumePark = event.value;
        break;
      case 'fire':
        this.volumeFire = event.value;
        break;
      case 'storm':
        this.volumeStorm = event.value;
        break;
    }
  }
}
