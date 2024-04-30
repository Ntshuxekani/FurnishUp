import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products : any[] =[]

  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient){}
  
  //fetch all products
  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  //fetch one products 
  getProduct(id:number = 1): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?id=${id}`);
  }

  //post a product
  postProduct(productData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, productData);
  }
  //delete a product
  deleteProduct(productId: number){
    return this.http.delete<any>('');

  }
  
}