import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  implements OnInit {

  productsList: IProduct[] = [];

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this._apiService.geAlltProducts().subscribe((products) => {
      console.log(products);
      this.productsList = products;
    });
  }

}
