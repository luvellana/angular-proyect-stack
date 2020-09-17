import { Component , OnInit, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {Subscription} from 'rxjs';
import { ProductService } from './shared/service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  products = [];

  productForm: FormGroup;

  productSubs: Subscription;
  productGetSubs: Subscription;
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  idEdit: any;

   constructor(private formBuilder: FormBuilder,
              private productService: ProductService) {
  }

ngOnInit(){
  
}




}
