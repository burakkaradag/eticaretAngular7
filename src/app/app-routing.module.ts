import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatListComponent } from './category/cat-list/cat-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path: 'catList', component: CatListComponent},
  {path: 'proList/:id', component: ProductListComponent},
  {path: 'proDetail/:id', component: ProductDetailComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
