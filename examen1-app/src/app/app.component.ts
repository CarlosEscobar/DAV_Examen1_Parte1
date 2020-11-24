import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'examen1-app';

  homeAlbums = [
    {
      "id":1,
      "name":"Album1",
      "artist":"Artist1",
      "price":2.97,
      "duration":111,
      "numberToDisplay":"$2.97",
      "score":1,
      "albumCoverUrl":"https://www.attackmagazine.com/wp-content/uploads/2014/11/artworks-000097027932-szvmrm-t500x500-500x479.jpg",
      "isBought":false,
      "genre":"Genre1",
      "releaseDate":"01/01/2001",
      "description":"Description1",
      "songs":[
        {
          "id":1,
          "name":"A1Song1",
          "artist":"Artist1",
          "duration":100,
          "popularity":1,
          "price":0.99,
          "isBought":false
        },
        {
          "id":2,
          "name":"A1Song2",
          "artist":"Artist1",
          "duration":10,
          "popularity":2,
          "price":0.99,
          "isBought":false
        },
        {
          "id":3,
          "name":"A1Song3",
          "artist":"Artist1",
          "duration":1,
          "popularity":3,
          "price":0.99,
          "isBought":false
        }
      ]
    },
    {
      "id":2,
      "name":"Album2",
      "artist":"Artist2",
      "price":1.98,
      "duration":220,
      "numberToDisplay":"$1.98",
      "score":2,
      "albumCoverUrl":"https://miro.medium.com/focal/1200/1200/50/40/1*8FkvzbSdSJ4HNxtuZo5kLg.jpeg",
      "isBought":false,
      "genre":"Genre2",
      "releaseDate":"02/02/2002",
      "description":"Description2",
      "songs":[
        {
          "id":1,
          "name":"A2Song1",
          "artist":"Artist2",
          "duration":200,
          "popularity":1,
          "price":0.99,
          "isBought":false
        },
        {
          "id":2,
          "name":"A2Song2",
          "artist":"Artist1",
          "duration":20,
          "popularity":2,
          "price":0.99,
          "isBought":false
        }
      ]
    },
    {
      "id":3,
      "name":"Album3",
      "artist":"Artist3",
      "price":3.96,
      "duration":3333,
      "numberToDisplay":"$3.96",
      "score":3,
      "albumCoverUrl":"https://cms-assets.tutsplus.com/uploads/users/114/posts/34296/image/Final-image.jpg",
      "isBought":false,
      "genre":"Genre3",
      "releaseDate":"03/03/2003",
      "description":"Description3",
      "songs":[
        {
          "id":1,
          "name":"A3Song1",
          "artist":"Artist3",
          "duration":3000,
          "popularity":1,
          "price":0.99,
          "isBought":false
        },
        {
          "id":2,
          "name":"A3Song2",
          "artist":"Artist3",
          "duration":300,
          "popularity":2,
          "price":0.99,
          "isBought":false
        },
        {
          "id":3,
          "name":"A3Song3",
          "artist":"Artist3",
          "duration":30,
          "popularity":3,
          "price":0.99,
          "isBought":false
        },
        {
          "id":4,
          "name":"A3Song4",
          "artist":"Artist3",
          "duration":3,
          "popularity":4,
          "price":0.99,
          "isBought":false
        }
      ]
    }
  ];

  profileAlbums = [];
  selectedAlbum = {};

  constructor() { }

  ngOnInit(): void {
    this.switchNavbar(1);
  }

  switchNavbar(index: number){
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab" + index).style.display = "block";

    document.getElementById("navbar1").className = "navbarItem";
    document.getElementById("navbar2").className = "navbarItem";
    document.getElementById("navbar" + index).className = "navbarItemActive";
  }

  receiveBuy(id: number){
    var index=-1;
    for(index=0;index<this.homeAlbums.length;index++){
      if(this.homeAlbums[index].id == id){
        break;
      }
    }
    if(index != -1){
      this.homeAlbums[index].isBought=true;
      this.homeAlbums[index].numberToDisplay = this.homeAlbums[index].duration + 'm';
      var songIndex=-1;
      for(songIndex=0;songIndex<this.homeAlbums[index].songs.length;songIndex++){
        this.homeAlbums[index].songs[songIndex].isBought=true;
      }
      this.profileAlbums.push(this.homeAlbums[index]);
    }
  }

  receiveSelect(id: number){
    var index=-1;
    for(index=0;index<this.homeAlbums.length;index++){
      if(this.homeAlbums[index].id == id){
        this.selectedAlbum = this.homeAlbums[index];
        document.getElementById("selectedAlbum").style.display = "block";
      }
    }
  }

  receiveScore(scoreData: any){
    var index=-1;
    for(index=0;index<this.homeAlbums.length;index++){
      if(this.homeAlbums[index].id == scoreData.albumId){
        this.homeAlbums[index].score = scoreData.score;
      }
    }
  }

  receiveBuySong(songData: any){
    var albumIndex=-1;
    for(albumIndex=0;albumIndex<this.homeAlbums.length;albumIndex++){
      if(this.homeAlbums[albumIndex].id == songData.albumId){
        var songIndex=-1;
        for(songIndex=0;songIndex<this.homeAlbums[albumIndex].songs.length;songIndex++){
          if(this.homeAlbums[albumIndex].songs[songIndex].id == songData.songId){
            this.homeAlbums[albumIndex].songs[songIndex].isBought=true;
            alert('Canción Comprada');
          }
        }

        var allSongsBought=true;
        for(songIndex=0;songIndex<this.homeAlbums[albumIndex].songs.length;songIndex++){
          if(this.homeAlbums[albumIndex].songs[songIndex].isBought == false){
            allSongsBought=false;
          }
        }

        if(allSongsBought){
          this.homeAlbums[albumIndex].isBought=true;
          this.homeAlbums[albumIndex].numberToDisplay = this.homeAlbums[albumIndex].duration + 'm';
          this.profileAlbums.push(this.homeAlbums[albumIndex]);
        }
      }
    }
  }

}
