import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl : string = "http://localhost:3000/produits/";
  constructor(private http: HttpClient) { }

  createProduct(produit){
    return this.http.post(this.apiUrl,produit);
  }

  getAllProducts(){
    return this.http.get(this.apiUrl);
  }

  getProductById(id){
    return this.http.get(this.apiUrl+id);
  }

  updateProduct(id,produit){
    return this.http.put(this.apiUrl+id,produit);
  }

  deleteProduct(id){
    return this.http.delete(this.apiUrl+id);
  }

}
