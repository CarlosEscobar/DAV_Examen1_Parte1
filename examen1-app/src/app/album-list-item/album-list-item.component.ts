import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album-list-item',
  templateUrl: './album-list-item.component.html',
  styleUrls: ['./album-list-item.component.css']
})
export class AlbumListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onBuyClick(){
    this.sendBuy.emit(this.id);
  }

  onAlbumClick(){
    this.sendSelect.emit(this.id);
  }

  @Input() id: number;
  @Input() name: string;
  @Input() artist: string;
  @Input() numberToDisplay: string;
  @Input() albumCoverUrl: string;
  @Input() isBought: boolean;

  @Output() sendBuy = new EventEmitter<number>();
  @Output() sendSelect = new EventEmitter<number>();

}
