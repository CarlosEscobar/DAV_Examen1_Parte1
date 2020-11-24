import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onScoreClick(score: number){
    if(this.selectedAlbum.score != score){
      this.sendScore.emit({
        "albumId":this.selectedAlbum.id,
        "score":score
      });
    }
  }

  closeAlbumDetail(){
    document.getElementById("selectedAlbum").style.display = "none";
  }

  receiveBuySong(id: number){
    this.sendBuySong.emit({
      "albumId":this.selectedAlbum.id,
      "songId":id
    });
  }

  onBuyAlbumClick(){
    this.sendBuyAlbum.emit(this.selectedAlbum.id);
  }

  @Input() selectedAlbum: any;

  @Output() sendScore = new EventEmitter<any>();
  @Output() sendBuyAlbum = new EventEmitter<number>();
  @Output() sendBuySong = new EventEmitter<any>();

}
