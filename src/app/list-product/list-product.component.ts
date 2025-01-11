import { Component } from '@angular/core';

@Component({
  selector: 'app-list-product',
  standalone: false,
  
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
  products = [
    { name: 'Produit A', description: 'Description du produit A', price: 49.99 },
    { name: 'Produit B', description: 'Description du produit B', price: 19.99 },
    { name: 'Produit C', description: 'Description du produit C', price: 29.99 },
    { name: 'Produit D', description: 'Description du produit D', price: 39.99 },
  ];

  constructor() {}
}
