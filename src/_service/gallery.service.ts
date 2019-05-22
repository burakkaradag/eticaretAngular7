import { Injectable } from '@angular/core';
import { Igallery } from 'src/_model/igallery';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
baseUrl = 'http://localhost:1707/';
galleryList: Igallery[];
constructor(private http: HttpClient) { }
getGallery(id: number): Observable<Igallery[]> {
  return this.http.get <Igallery[]>(this.baseUrl + 'Gallery/Liste' + id);
}
}
