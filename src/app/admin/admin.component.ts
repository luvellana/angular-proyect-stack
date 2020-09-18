import { Component, OnInit } from '@angular/core';

import { ProductService } from '../shared/services/product.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  products = [];

  productForm: FormGroup;
  productSubs: Subscription;
  productGetSubs: Subscription;
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  idEdit: any;

  searched:any;
  searchedSend:any;

   constructor(private formBuilder: FormBuilder,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.loadProduct();

    this.productForm = this.formBuilder.group({
      imageUrl: '',
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: '',
      stock: '',
      type: ['', [Validators.required]]
    });
    
  }

  loadProduct(): void {
    this.products = [];
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
  }

onDelete(id: any): void {
    this.productDeleteSubs = this.productService.deleteProduct(id).subscribe(
      res => {
        this.loadProduct();
      }
      
    );
  }
 onEdit(product): void {
    this.idEdit = product.id;
    this.productForm.patchValue(product);
  }

  onUpdateProduct(): void {
    this.productUpdateSubs = this.productService.updateProduct(this.idEdit, this.productForm.value).subscribe(
      res => {
        this.loadProduct();
      }
    );
  }

  onCreate(): void {
    this.productSubs = this.productService.addProduct(this.productForm.value).subscribe(
      res => {
        this.loadProduct();
      }
    );

  }

  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
    this.productDeleteSubs ? this.productDeleteSubs.unsubscribe() : '';
    this.productUpdateSubs ? this.productUpdateSubs.unsubscribe() : '';
  }

  onSearch(){
    this.searchedSend = this.searched.toLowerCase();

    this.loadProduct();
  }


}