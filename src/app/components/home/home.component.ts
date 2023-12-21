import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allProducts: any;

  constructor(private productApi: ProductService) {}

  ngOnInit(): void {
    this.productApi.getAllProducts().subscribe((res) => {
      console.log(res);
    });
  }
}
