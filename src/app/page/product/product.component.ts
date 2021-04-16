import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  
  products$: Observable<Product[]> = this.productService.getAll();
  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onDelete(product: Product): void {
    if (!confirm("Are you sure?")) {
      return;
    }
    this.productService.remove(product).subscribe(
      p => this.products$ = this.productService.getAll()
    );
  }

  
}
