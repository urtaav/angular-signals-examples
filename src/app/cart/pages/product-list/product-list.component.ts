import { Component, OnInit, inject } from '@angular/core';
import { ApiService, IProduct } from '../../services/api.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  
  public products: IProduct[] = [];

  public api = inject(ApiService);
  public castService = inject(CartService);

  ngOnInit(): void {}

  addToCart = (product:IProduct) => {
    this.castService.addProductSignal(product);
  }

}
