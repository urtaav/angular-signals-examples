import { Injectable, computed, inject, signal } from '@angular/core';
import { ApiService, IProduct } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public api = inject(ApiService);

  public cartItems = signal<IProduct[]>([]);
  public subTotal = computed(() => this.cartItems().reduce((prev: any, curr: IProduct) => { return prev + curr.price; }, 0));
  public totalItems = computed(() => this.cartItems().length);


  addProductSignal(product: IProduct) {
    this.cartItems.mutate((val) => {
      val.push(product);
    });
    this.api.products()?.forEach(a=>{
      if(a.id === product.id){
        a.rating.count = a.rating.count - 1;
      }
    })
  }

  removeProductSignal(id: number) {
    this.cartItems.mutate((val) => {
      const deletedProduct:any = val.splice(id, 1)[0];

      this.api.products()?.forEach((product) => {
        if (product.id === deletedProduct.id) {
          product.rating.count += 1;
        }
      });
    });
  }
  
}
