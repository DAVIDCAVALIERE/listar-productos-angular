import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product?: IProduct;
  loading: Boolean = true;
  color: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService.getProductById(Number(params['productId'])).subscribe({
          next: (product: IProduct) => {
            this.product = product;
            this.color = (this.product?.price as number) > 10 ? 'blue' : '';
            this.loading = false;
          },
          error: (error: any) => {
              console.error('Error fetching product details:', error);
              this.loading = false;
            }
        });
      },
      error: (error: any) => {
        console.error('Error fetching route parameters:', error);
      }
    });
  }
}
