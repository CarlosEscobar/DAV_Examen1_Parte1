import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumListItemComponent } from './album-list-item/album-list-item.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { SongListItemComponent } from './song-list-item/song-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumListItemComponent,
    HomePageComponent,
    ProfilePageComponent,
    AlbumDetailComponent,
    SongListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
