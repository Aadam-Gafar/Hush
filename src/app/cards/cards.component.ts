import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
  
  currentCard: any;
  changeVolume(event: any, cardName: string) {
    // Picks appropriate sound card
    switch(cardName) {
      case 'bird':
        this.currentCard = document.getElementById("audioBird");
        break;
      case 'rain':
        this.currentCard = document.getElementById("audioRain");
        break;
      case 'coffee':
        this.currentCard = document.getElementById("audioCoffee");
        break;
      case 'park':
        this.currentCard = document.getElementById("audioPark");
        break;
      case 'fire':
        this.currentCard = document.getElementById("audioFire");
        break;
      case 'storm':
        this.currentCard = document.getElementById("audioStorm");
        break;
    }

    // Controls audio playback
    this.currentCard.volume = event.value / 100;
    if (this.currentCard.volume <= 0) {
      this.currentCard.pause();
    } else {
      this.currentCard.play();
    }
  }
}
