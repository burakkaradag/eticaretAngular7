import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproducts } from 'src/_model/iproducts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
baseUrl = 'http://localhost:1707/';
proList: Iproducts[];
constructor(private http: HttpClient) { }

getProduct(id: number): Observable<Iproducts[]> {
return this.http.get <Iproducts[]>(this.baseUrl + 'Products/Liste/' + id);
}
productDetail(id: number): Observable<Iproducts> {
  return this.http.get <Iproducts>(this.baseUrl + 'Products/Detay/' + id);
}
}
