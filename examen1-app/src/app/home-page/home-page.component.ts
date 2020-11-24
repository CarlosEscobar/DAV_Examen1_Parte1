import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  receiveBuy(id: number){
    this.sendBuy.emit(id);
  }

  receiveSelect(id: number){
    this.sendSelect.emit(id);
  }

  @Input() homeAlbums: any[];

  @Output() sendBuy = new EventEmitter<number>();
  @Output() sendSelect = new EventEmitter<number>();
}
