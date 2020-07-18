import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../products';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string='Product Detail';
  product:IProduct;
  products:IProduct[];
  errorMessage:string;


  constructor(private route:ActivatedRoute,private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    //+ is a operator which convert string id to integer
    let id=+this.route.snapshot.paramMap.get('id');
    this.pageTitle+=`:${id}`;
   
    this.productService.getProducts().subscribe({
      next:products=>{
        this.products=products;
        },
      error:err=>this.errorMessage=err.message,
      complete:()=>{
        this.product=this.getProductById(id);
        
      }
      });
  }

  onBack():Promise<boolean>{

    return this.router.navigate(['/products']);
  }
  getProductById(id):IProduct
{
  
  for(let p of this.products)
  {
    if(p.productId==id)
       return p

  }
  return null;
}
}
