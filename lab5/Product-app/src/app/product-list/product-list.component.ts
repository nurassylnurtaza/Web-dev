import { Component } from '@angular/core';
import {Category} from "../categories";
import {Product, products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  currcategory: string = 'Все';
  items: any = products;
  categories: string[] = this.categoriesList(this.items);
  share(link:string) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(telegramUrl, '_blank');
  }
  nextImage(a:number){
    if(products[a].i < 2){
      products[a].i += 1;
    }
    else{
      products[a].i = 0;
    }

  }
  categoriesList(items: Product[]): string[]{
    const categories = new Set<string>();
    categories.add('Все');
    items.forEach((item) => categories.add(item.category.name));
    return Array.from(categories);
  }
  changeCategory(category:string): any{
    this.currcategory = category;
    if (this.currcategory === "Все") {
      return this.items;
    } else {
      return this.items.filter((item: { category: { name: string; }; }) => item.category.name === category);
    }
  }
  updatedLike(likes:number, product: Product){
    product.likes = likes;
  }
  delete(product: Product){
    this.items.splice(this.items.indexOf(product), 1);
  }



}


