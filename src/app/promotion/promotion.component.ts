import { Component } from '@angular/core';

@Component({
  selector: 'app-promotion',
  standalone: false,
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent {
  // Liste d'exemple de produits
  products = [
    { name: 'Produit A', description: 'Description du produit A', price: 49.99 },
    { name: 'Produit B', description: 'Description du produit B', price: 19.99 },
    { name: 'Produit C', description: 'Description du produit C', price: 29.99 },
    { name: 'Produit D', description: 'Description du produit D', price: 39.99 },
  ];

  constructor() {}
}
