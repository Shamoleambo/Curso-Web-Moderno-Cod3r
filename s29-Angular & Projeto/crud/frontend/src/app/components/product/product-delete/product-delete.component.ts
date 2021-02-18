import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private poductService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.poductService
      .readById(id)
      .subscribe(product => this.product = product);
  }

  deleteProduct():void{
    this.poductService
      .delete(this.product.id)
      .subscribe(product =>{
        this.poductService.showMessage("Produto Deletado com Sucesso!");
      });

    this.router.navigate(['/products']);
  }

  cancel(): void{
    this.router.navigate(['/products']);
  }

}
