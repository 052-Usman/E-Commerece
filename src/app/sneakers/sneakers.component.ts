import { Component } from '@angular/core';

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.scss']
})
export class SneakersComponent {
  mainImage = '../../assets/Rectangle 4.png';

  image1 = '../../assets/Rectangle 6.png';
  image2 = '../../assets/Rectangle 8.png';
  image3 = '../../assets/Rectangle 7.png';
  image4 = '../../assets/Rectangle 9.png';

  changeImage(source: string) {
    // this.mainImage = source;

    this.mainImage = source;

    console.log(source);
  }

  
  quantity = 1;

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}