import { Component, OnInit, Input } from '@angular/core';
import { Icategory } from 'src/_model/icategory';
import { CategoryService } from 'src/_service/category.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
@Input() InputcategoryList: Icategory[];
catlist: Icategory[];

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
}
