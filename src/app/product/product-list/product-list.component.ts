import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/_service/products.service';
import { Iproducts } from 'src/_model/iproducts';
import { GalleryService } from 'src/_service/gallery.service';
import { Igallery } from 'src/_model/igallery';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
proList: Iproducts[];
seccategoryid: number;
secproductid: number;
secproduct: Iproducts;
galleryList: Igallery[];
  constructor(private proService: ProductsService, private galleryService: GalleryService) { }

  ngOnInit() {
    this.seccategoryid = parseInt(localStorage.getItem('seccategoryid'), this.seccategoryid);
    this.secproductid = parseInt(localStorage.getItem('productid'), this.secproductid);
    this.getProduct(this.seccategoryid);
  }
  getProduct(id: number) {
    this.proService.getProduct(id).subscribe((products: Iproducts[]) => {
      this.proList = products;
    }, err => {
      console.log('Failed');
    });
  }
  // selectProduct(p: Iproducts) {
  //   this.secproduct = p;
  //   localStorage.setItem('secproductid', this.secproductid.toString());
  // }
  productDetay(id: number) {
    this.proService.productDetail(id).subscribe((productdetail: Iproducts) => {
      this.secproduct = productdetail;
      localStorage.setItem('productid', this.secproductid.toString());
    });
  }
  getGallery(id: number) {
    this.galleryService.getGallery(id).subscribe((galleries: Igallery[]) => {
      this.galleryList = galleries;
    }, err => {
      console.log('Failed');
    });
  }
}
