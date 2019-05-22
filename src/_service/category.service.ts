import { Injectable } from '@angular/core';
import { Icategory } from 'src/_model/icategory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
baseUrl = 'http://localhost:1707/';
categoryList: Icategory[];
constructor(private http: HttpClient) { }

getCategory(): Observable<Icategory[]> {
  return this.http.get <Icategory[]>(this.baseUrl + 'Categories/Liste');
}
}
