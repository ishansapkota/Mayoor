import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { URL, URLSearchParams } from 'url';

@Component({
    selector: 'app-products',
    standalone: true,
    imports: [RouterLink,CommonModule], 
    templateUrl: './products.component.html',
    styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

    productName: string = '';
    seriesName: string = '';
    productImage: string = '';
    productDescription: string = '';
    productPrice: string = '';
    showSubProducts: boolean = false;  
    subProducts: any[] = [];  
  
    constructor(private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      // Get the 'productName' parameter from the URL
      this.route.paramMap.subscribe(params => {
        this.productName = params.get('productName') || '';
        this.loadProductDetails();
      });
    }
  
    // Simulate fetching product details based on the product name
    loadProductDetails(): void {
      if (this.productName === '1kSeries') {
        this.seriesName = '1K Series';
        this.productImage = 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png';
        this.productDescription = 'This is a description for Product 1K Series';
        this.productPrice = '$30.99';

        this.subProducts = [
            { name: 'Sub-product 1k', image: 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png', price: '$10.00' },
            { name: 'Sub-product 1K', image: 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png', price: '$15.00' },
            { name: 'Sub-product 1k', image: 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png', price: '$20.00' },
        ];

      } else if (this.productName === '2kSeries') {
        this.seriesName = '2K Series';
        this.productImage = 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png';  // Replace with actual image URL
        this.productDescription = 'This is a description for Product 2B';
        this.productPrice = '$40.99';

        this.subProducts = [
            { name: 'Sub-product 2k', image: 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png', price: '$25.00' },
            { name: 'Sub-product 2k', image: 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png', price: '$30.00' },
          ];
      } 
      else if (this.productName === 'A2kSeries') {
        this.seriesName = 'A2K Series';
        this.productImage = 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png';  // Replace with actual image URL
        this.productDescription = 'This is a description for Product 3B';
        this.productPrice = '$40.99';

        this.subProducts = [
            { name: 'Sub-product A2K', image: 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png', price: '$25.00' },
            { name: 'Sub-product A2K', image: 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png', price: '$30.00' },
          ];
        }
      else if (this.productName === 'clearcostSeries') {
        this.seriesName = 'Clear Cost Series';
        this.productImage = 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png';  // Replace with actual image URL
        this.productDescription = 'This is a description for Product 4B';
        this.productPrice = '$40.99';

        this.subProducts = [
            { name: 'Sub-product clearCost', image: 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png', price: '$25.00' },
            { name: 'Sub-product clearCost', image: 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png', price: '$30.00' },
          ];
      }
      else if (this.productName === 'auxSeries') {
        this.seriesName = 'Auxillary Series';
        this.productImage = 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png';  // Replace with actual image URL
        this.productDescription = 'This is a description for Product 5B';
        this.productPrice = '$40.99';

        this.subProducts = [
            { name: 'Sub-product auxSeries', image: 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png', price: '$25.00' },
            { name: 'Sub-product auxSeries', image: 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png', price: '$30.00' },
          ];
      }else {
        // Default case for unknown products
        this.productDescription = 'Product details not available.';
        this.productImage = 'https://example.com/default-image.jpg';  // Replace with default image
        this.productPrice = '$0.00';
      }
    }

    toggleSubProducts(): void {
        this.showSubProducts = !this.showSubProducts;
      }
}
