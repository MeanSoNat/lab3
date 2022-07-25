import { Component, OnInit } from '@angular/core';
import { Product, Products } from '../product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product = Products
  constructor() { }

  ngOnInit(): void {
  }

}
