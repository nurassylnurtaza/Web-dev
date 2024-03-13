import {Component, OnInit} from '@angular/core';
import {Album} from "../../models/album";
import {Photo} from "../../models/photos";
import {ActivatedRoute, RouterLink, RouterModule} from "@angular/router";
import {AlbumService} from "../album.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  album: Album;
  photos: Photo[];

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.album = {} as Album;
    this.photos = {} as Photo[];
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id')!;
      this.albumService.getAlbum(+id).subscribe((Album) =>{
        this.album = Album;
        this.albumService.getPhotos(+id).subscribe((photos) => {
          this.photos = photos;
        })
      })
    })
  }
  returnBack(){
    window.open(`http://localhost:4200/albums/${this.album.id}`, '_parent')
  }

}
