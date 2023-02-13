import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { // Silences all sound files
    var audioTags = document.getElementsByTagName("audio");
    for (var i = 0; i < audioTags.length; i++) {
      audioTags[i].volume = 0;
    }
  }
  
  currentCard: any;
  changeVolume(event: any, cardName: string) {
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
    this.currentCard.volume = event.value / 100;
  }
}
