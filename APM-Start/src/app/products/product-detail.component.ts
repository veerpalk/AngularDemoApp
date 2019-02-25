import { Component, OnInit } from '@angular/core';
import{IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService } from './product.service';
import { debug } from 'util';
@Component({
 
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 pageTitle:string ='Product Detail';
 product:IProduct;



  constructor(private route:ActivatedRoute,private router:Router,private productService:ProductService) { }

  ngOnInit() {
    let id=+this.route.snapshot.paramMap.get('id');
 console.log("see"+this.pageTitle);
 this.productService.getProducts().subscribe(
  products=> {
this.product=products.find((product:IProduct)=>product.productId==id)
console.log("got"+this.product.productName);  

  },

);

}

  onBack(): void{
    this.router.navigate(['/products']);
  }

}
