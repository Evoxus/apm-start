import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProducts } from "./products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.productUrl);
  }
}