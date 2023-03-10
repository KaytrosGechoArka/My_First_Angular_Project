import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products=[
    {id:1,name:'Minimalist Analog Watch',price:'109',color:'Black',available:'Available',image:'assets/products/watch.jfif'},
    {id:2,name:'Hisense Ultra HD Smart TV',price:'3339',color:'Black',available:'Not Available',image:'assets/products/tv.jfif'},
    {id:3,name:'APPLE iPhone 12',price:'1855',color:'Red',available:'Available',image:'assets/products/phone.jfif'},
    {id:4,name:'LG Fully Automatic Washing Machine',price:'1765',color:'White',available:'Available',image:'assets/products/laundary.jfif'},
    {id:5,name:'LG Refrigerator with Door Cooling',price:'2815',color:'White',available:'Available',image:'assets/products/refigurator.jfif'},
    {id:6,name:'Dell Inspiron One 27 Ryzen 7',price:'2145',color:'White',available:'Available',image:'assets/products/ryzen.jfif'}
  ]
}
