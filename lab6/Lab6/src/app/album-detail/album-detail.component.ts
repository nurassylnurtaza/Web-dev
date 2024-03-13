import {Component, OnInit} from '@angular/core';
import {Album} from "../../models/album";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AlbumService} from "../album.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album!: Album;
  newTitle!: string;
  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.newTitle = '';
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'))
      this.albumService.getAlbum(id).subscribe((album) =>{
        this.album = album;
      })
    })
  }
  returnBack(){
    window.open('http://localhost:4200/albums', '_parent')
  }
  saveTitle(){
    if(this.album.title !== this.newTitle){
      this.album.title = this.newTitle
      this.newTitle = '';
    }else{
      alert('Enter different title')
    }
  }

}
