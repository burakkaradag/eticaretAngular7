import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/_model/icategory';
import { CategoryService } from 'src/_service/category.service';
import { Iproducts } from 'src/_model/iproducts';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
catlist: Icategory[];
seccategoryid: Iproducts;

  constructor(private catService: CategoryService) { }

  ngOnInit() {
    this.getCategories();

  }
  getCategories() {
    this.catService.getCategory().subscribe((categories: Icategory[]) => {
      this.catlist = categories;
    }, err => {
      console.log('Failed');
    });
  }
  selectCategory(p: Iproducts) {
    this.seccategoryid = p;
    localStorage.setItem('seccategoryid', this.seccategoryid.toString());
  }

}
