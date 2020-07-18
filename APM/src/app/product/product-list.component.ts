import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';


@Component({

    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css'],
    providers:[ProductService]
})


export class ProductListComponent implements OnInit
{


  constructor(private productService:ProductService)
  {
    this.filteredProducts=this.products;
    this.listFilter='cart';
    
  }
  performFilter(value:string): IProduct[] {

    return this.products.filter(product=>
    product.productName.toLocaleLowerCase().indexOf(value)!==-1);
    }
    ngOnInit(): void {

      this.productService.getProducts().subscribe({
        next:products=>{this.products=this.products;
          this.filteredProducts=products;

        },
        error:err=>this.errorMessage=err.message
     });
     console.log("I got initialize");
    }

    pageTitle:string='Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    private _listFilter;
    errorMessage:string;
    get listFilter():string{

      return this._listFilter;
    }

    set listFilter(value:string){

    this._listFilter=value;
    this.filteredProducts=this._listFilter?this.performFilter(value):this.products;
     }
     filteredProducts:IProduct[];
    products:IProduct[]=[
        {
          "productId": 1,
          "productName": "Leaf Rake",
          
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2019",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "assets/images/leaf_rake.png"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2019",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "assets/images/garden_cart.png"
        }
    ];
      
    toggleButton():void  {

    this.showImage=!this.showImage; 

    }
    onRatingClicked(message:string):void{

      this.pageTitle=message;
    }

}