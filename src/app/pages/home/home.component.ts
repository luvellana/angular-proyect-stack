import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import { ProductService } from '../../shared/services/product.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  products = [];

  productSubs: Subscription;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {

   this.productSubs = this.productService.getProducts().subscribe(res => {

    
      console.log('RESPUESTA: ', res);
      console.log('RESPUESTA: ', Object.entries(res));

      Object.entries(res).map(p => this.products.push(p[1]));

    });

  }

  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
  }

}