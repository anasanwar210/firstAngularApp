import { Component } from '@angular/core';
import { RecomendedComponent } from '../recomended/recomended.component';

interface IProduct {
  title: string;
  description: string;
  imageCover: string;
  price: number;
  quantity: number;
  images: string[];
  onSale: boolean;
}

@Component({
  selector: 'app-products',
  imports: [RecomendedComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  limitedImages: string[] = [];
  deferState: boolean = false;
  constructor() {}
  productList: IProduct[] = [
    {
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg',
      price: 190,
      quantity: 225,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg',
      ],
      onSale: false,
    },
    {
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266805-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266807-4.jpeg',
      ],
      onSale: true,
    },
    {
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156501-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156555-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156555-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156554-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156556-4.jpeg',
      ],
      onSale: false,
    },
    {
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838276-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838330-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838331-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838332-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838331-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838332-5.jpeg',
      ],
      onSale: true,
    },
    {
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tBeige\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563605-cover.jpeg',
      price: 349,
      quantity: 228,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563676-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563676-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563677-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563675-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563677-5.jpeg',
      ],
      onSale: false,
    },
    {
      title: 'Woman Bordeaux Long Sleeve Blouse BORDEAUX',
      description: 'ShellFabric1 Cotton 65% Polyester 35%',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402411833-cover.jpeg',
      price: 499,
      quantity: 228,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402411883-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402411883-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402411883-1.jpeg',
      ],
      onSale: true,
    },
    {
      title: 'Woman Brown Long Sleeve Tunic LT.CAMEL',
      description: 'ShellFabric1 Cotton 65% Polyester 35%',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402295928-cover.jpeg',
      price: 499,
      quantity: 229,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402296306-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402296305-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402296305-2.jpeg',
      ],
      onSale: false,
    },
    {
      title: 'Woman Standart Fit Knitted',
      description:
        'Material\tPolyester Blend\nColour Name\tBeige\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401893316-cover.jpeg',
      price: 499,
      quantity: 222,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401893496-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401893496-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401893497-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401893496-3.jpeg',
      ],
      onSale: true,
    },
    {
      title: 'Relaxed Fit Knitted Joggers Lilac',
      description:
        'Colour Name\tPink\nDepartment\tWomen\nMaterial Composition\tPolyester Blend',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401672268-cover.jpeg',
      price: 499,
      quantity: 222,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401672624-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401672623-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401672624-3.jpeg',
      ],
      onSale: false,
    },
  ];
  loadDefer(): void {
    this.deferState = !this.deferState;
    console.log(this.deferState);
  }
}
