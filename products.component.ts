import { Products } from './../mock-data/products';
import { MockData } from './../mock-data';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Products[]=[];
  constructor() { 
    this.products=MockData.products;
    
  }

  ngOnInit() {
  }

}
