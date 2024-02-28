import { Component, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: any
  @Output() updateLike = new EventEmitter<number>();
  @Output() updateDelete = new EventEmitter();
  click: boolean = false;
  handleLike(): void {
    if (this.click) {
      this.product.likes--;
      this.updateLike.emit(this.product.likes);
      this.click = false;
      return;
    }
    this.product.likes++;
    this.updateLike.emit(this.product.likes);
    this.click = true;
  }

  handleDelete(): void {
    this.updateDelete.emit(this.product.name);
  }
}
