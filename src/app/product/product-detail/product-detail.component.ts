import { Component, OnInit, Input } from '@angular/core';
import { GalleryService } from 'src/_service/gallery.service';
import { Igallery } from 'src/_model/igallery';
import { ProductsService } from 'src/_service/products.service';
import { Iproducts } from 'src/_model/iproducts';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
secgallery: Igallery;
galleryList: Igallery[];
proList: Iproducts[];
secProduct: Iproducts;
secproductid: number;
  constructor(private galleryService: GalleryService,
              private proService: ProductsService) { }

  ngOnInit() {
    // this.secproductid = parseInt(localStorage.getItem('secproductid'), this.secproductid);
    this.getProduct(this.secproductid);
  }


  getProduct(id: number) {
    this.proService.getProduct(id).subscribe((products: Iproducts[]) => {
      this.proList = products;
    }, err => {
      console.log('Failed');
    });
  }


}
