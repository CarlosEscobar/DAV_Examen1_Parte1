import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-song-list-item',
  templateUrl: './song-list-item.component.html',
  styleUrls: ['./song-list-item.component.css']
})
export class SongListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onBuySongClick(){
    this.sendBuySong.emit(this.id);
  }

  @Input() id: number;
  @Input() name: string;
  @Input() artist: string;
  @Input() duration: number;
  @Input() popularity: number;
  @Input() price: number;
  @Input() isBought: boolean;

  @Output() sendBuySong = new EventEmitter<number>();

}
