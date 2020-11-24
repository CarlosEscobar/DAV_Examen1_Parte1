import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  receiveBuy(id: number){
    this.sendBuy.emit(id);
  }

  receiveSelect(id: number){
    this.sendSelect.emit(id);
  }

  @Input() albums: any[];

  @Output() sendBuy = new EventEmitter<number>();
  @Output() sendSelect = new EventEmitter<number>();

}
