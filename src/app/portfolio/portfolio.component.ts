import { Component } from '@angular/core';
import { producerUpdatesAllowed } from '@angular/core/primitives/signals';

export interface IPortfolio {
  id: string | number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  portfolioList: IPortfolio[] = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: '/images/portfolio/work-1.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      category: "men's clothing",
      image: '/images/portfolio/work-2.jpg',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      description:
        'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
      category: "men's clothing",
      image: '/images/portfolio/work-3.jpg',
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: 'Mens Casual Slim Fit',
      price: 15.99,
      description:
        'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
      category: "men's clothing",
      image: '/images/portfolio/work-4.jpg',
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: 'jewelery',
      image: '/images/portfolio/work-5.jpg',
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: 'Solid Gold Petite Micropave ',
      price: 168,
      description:
        'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
      category: 'jewelery',
      image: '/images/portfolio/work-6.jpg',
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
  ];
  isSliderVisible: boolean = false;
  currentImage: string = '';
  currentIndex: number = 0;

  portfolioImage(id: string | number): void {
    console.log(id);
    this.isSliderVisible = true;
    for (let i = 0; i < this.portfolioList.length; i++) {
      if (this.portfolioList[i].id === id) {
        this.currentIndex = i;
        this.currentImage = this.portfolioList[i].image;
        console.log(this.currentIndex);
        console.log(this.portfolioList[i].image);
        break;
      }
    }
  }

  closeSlider(): void {
    this.isSliderVisible = false;
    console.log('close');
  }

  nextImage(): void {
    if (this.currentIndex < this.portfolioList.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    if (this.portfolioList[this.currentIndex]) {
      this.currentImage = this.portfolioList[this.currentIndex].image;
    }
  }

  prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.portfolioList.length - 1;
    }
    if (this.portfolioList[this.currentIndex]) {
      this.currentImage = this.portfolioList[this.currentIndex].image;
    }
  }
}
