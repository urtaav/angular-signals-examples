import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal, } from '@angular/core';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public http = inject(HttpClient);
  public products = toSignal<IProduct[]>(this.http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
    tap(value => console.log(value))
  ))
  public products$ = toObservable(this.products).pipe(
    tap(value => console.log(value))
  )
}


export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: IRating;
}

interface IRating {
  rate: number;
  count: number;
}
