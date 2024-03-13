import {Component, OnInit} from '@angular/core';
import {Album} from "../../models/album";
import {AlbumService} from "../album.service";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: Album[];
  loaded: boolean = false;
  title: string;
  id = 120;
  constructor(private albumService: AlbumService) {
    this.title = '';
    this.albums = [];

  }
  ngOnInit() {
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) =>{
      this.albums = albums;
      this.loaded = true;
    });
  }
  createNewAlbum(){
    if(this.title === ''){
      return;
    }
    this.albumService.createPost({userId: this.id, id: this.albums.length + 1, title:this.title})
      .subscribe((item) => {
        this.albums.unshift(item);
        alert('Album created')
        this.title = '';
        this.id++;
      })
  }

  delete(album: Album){

    this.albumService.deleteAlbum(album.id).subscribe(() =>{
      let idx = this.albums.indexOf(album);
      this.albums.splice(idx, 1);
    })
  }

}
