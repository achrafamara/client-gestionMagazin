// ms-product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Définition de l'interface Product
export interface Product {
  id: number;           // Correspond au titre du produit
  titre: string;        // Description du produit
  description: string;  // URL de l'image du produit
  image: string;        // Prix du produit
  prix: number;
}

@Injectable({
  providedIn: 'root'
})
export class MsProductService {

  
  private apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
