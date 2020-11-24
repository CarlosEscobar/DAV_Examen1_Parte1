import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  receiveBuy(id: number){
    //Do nothing
  }

  receiveSelect(id: number){
    this.sendSelect.emit(id);
  }

  @Input() profileAlbums: any[];

  @Output() sendSelect = new EventEmitter<number>();

}
