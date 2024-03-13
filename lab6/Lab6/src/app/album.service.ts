import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album} from "../models/album";
import {Photo} from "../models/photos";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }
  getAlbums(){
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getAlbum(id:number){
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  deleteAlbum(id:number){
    return this.http.delete<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  createPost(newAlbum: Album){
    return this.http.post<Album>('https://jsonplaceholder.typicode.com/albums', newAlbum)
  }
  getPhotos(id: number) {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
