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
    productDescription1: string = '';
    productDescription2: string = '';
    productDescription3: string = '';
    productDescription4: string = '';
    productDescription5: string = '';
    productDescription6: string = '';

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
        this.productImage = 'paint-bucket1.jfif';
        this.productDescription1 = 'Single-component formulation – no catalyst or hardener required.';
        this.productDescription2 = 'Easy to apply – ideal for both professionals and DIY enthusiasts.';
        this.productDescription3 = 'Excellent adhesion – ensures a uniform coat.';
        this.productDescription4 = 'Durable and resistant to environmental wear.';
        this.productDescription5 = 'Perfect for touch-ups and full vehicle restoration.';
        this.productDescription6 = 'Eco-conscious design – supports sustainable automotive aesthetics.'
        // this.productPrice = '$30.99';

        this.subProducts = [
            { name: 'Sub-product 1k', image: 'coming-soon.jpg' },
            { name: 'Sub-product 1K', image: 'coming-soon.jpg' },
            { name: 'Sub-product 1k', image: 'coming-soon.jpg' },
            { name: 'Sub-product 1k', image: 'coming-soon.jpg' },
            //{ name: 'Sub-product 1k', image: 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png', price: '$20.00' },
            // { name: 'Sub-product 1k', image: 'https://res.cloudinary.com/dzcdirj0l/image/upload/v1743182253/p-4_mmovgz.png', price: '$20.00' },
        ];

      } else if (this.productName === '2kSeries') {
        this.seriesName = '2K Series';
        this.productImage = 'paint-bucket2.jfif';  // Replace with actual image URL
        this.productDescription1 = 'Two-component system – includes paint and hardener.';
        this.productDescription2 = 'Delivers ultra-glossy, high-performance finish.';
        this.productDescription3 = 'Exceptional scratch resistance and chemical durability.';
        this.productDescription4 = 'Maintains long-term color fidelity – fade-resistant.';
        this.productDescription5 = 'Strong environmental protection – withstands extreme conditions.';
        this.productDescription6 = 'Backed by advanced technology and rigorous quality standards.';

        this.subProducts = [
            { name: 'Sub-product 2k', image: 'coming-soon.jpg'},
            { name: 'Sub-product 2k', image: 'coming-soon.jpg'},
          ];
      } 
      else if (this.productName === 'A2kSeries') {
        this.seriesName = 'A2K Series';
        this.productImage = 'paint-bucket3.jfif';  // Replace with actual image URL
        this.productDescription1 = 'Premium alloy-like metallic finish – vivid sparkle and depth.';
        this.productDescription2 = 'Advanced resin technology – ensures superior adhesion and durability.';
        this.productDescription3 = 'Exceptional resistance – protects against scratches, chemicals, and harsh weather.';
        this.productDescription4 = 'Perfect for full restorations and high-precision touch-ups.';
        this.productDescription5 = 'Eye-catching results – enhances vehicle aesthetics for high-end projects.';
        this.productDescription6 = 'Smooth, consistent application – professional-grade outcomes.'
        this.productPrice = '$40.99';

        this.subProducts = [
            { name: 'Sub-product A2K', image: 'coming-soon.jpg'},
            { name: 'Sub-product A2K', image: 'coming-soon.jpg'},
          ];
        }
      else if (this.productName === 'clearcostSeries') {
        this.seriesName = 'Clear Coat Series';
        this.productImage = 'paint-bucket1.jfif';  // Replace with actual image URL
        this.productDescription1 = 'High-gloss protective layer – amplifies color depth and shine.';
        this.productDescription2 = 'UV protection – shields paint from fading and sun damage.';
        this.productDescription3 = 'Chemical and wear-resistant – defends against daily exposure.';
        this.productDescription4 = 'Smooth application – bubble-free, mirror-like finish.';
        this.productDescription5 = 'Ideal for full-body jobs and fine detail work.';
        this.productDescription6 = 'Preserves and enhances the base paint – lasting beauty and protection.'
        this.subProducts = [
            { name: 'Sub-product clearCost', image: 'coming-soon.jpg'},
            { name: 'Sub-product clearCost', image: 'coming-soon.jpg'},
          ];
      }
      else if (this.productName === 'auxSeries') {
        this.seriesName = 'Auxillary Series';
        this.productImage = 'paint-bucket.png';  // Replace with actual image URL
        this.productDescription1 = 'This is a description for Product Auxillary Series';
        this.productDescription2 = 'UV protection – shields paint from fading and sun damage.';
        this.productDescription3 = 'Chemical and wear-resistant – defends against daily exposure.';
        this.productDescription4 = 'Smooth application – bubble-free, mirror-like finish.';
        this.productDescription5 = 'Ideal for full-body jobs and fine detail work.';
        this.productDescription6 = 'Preserves and enhances the base paint – lasting beauty and protection.';
        this.productPrice = '$40.99';

        this.subProducts = [
            { name: 'Sub-product auxSeries', image: 'coming-soon.jpg'},
            { name: 'Sub-product auxSeries', image: 'coming-soon.jpg'},
          ];
      }else {
        // Default case for unknown products
        this.productDescription1 = 'Product details not available.';
        this.productImage = 'https://example.com/default-image.jpg';  // Replace with default image
        this.productPrice = '$0.00';
      }
    }

    toggleSubProducts(): void {
        this.showSubProducts = !this.showSubProducts;
      }
}
