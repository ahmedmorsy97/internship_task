import { Component, OnInit, Input} from '@angular/core';
import {Addprod} from '../modules/addprod.model';
import {Fruit} from '../modules/fruit.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // number of eacch product
  orange = 0;
  apple = 0;
  banana = 0;
  peaches = 0;
  // disable button for each product
  erroro = false;
  errora = false;
  errorb = false;
  errorp = false;
  // show empty list
  empty = false;
  // purchased products
  addeds: Addprod[] = [];
  fruits: Fruit[] = [];
  cookieValue = 'empty';
  product = '';
  i = 0;
  x = 0;
  prodsplit: string[] = [];
  prod: any;
  // show form
  show = false;
  constructor( private cookieService: CookieService) { }
  ngOnInit() {
    // adding fruits
    this.fruits.push( new Fruit('Orange', 1, '../../assets/images/oranges.jpg'));
    this.fruits.push( new Fruit('Apple', 0.5, '../../assets/images/apple.jpg'));
    this.fruits.push( new Fruit('Banana', 0.7, '../../assets/images/banana.jpg'));
    this.fruits.push( new Fruit('Peaches', 1.3, '../../assets/images/peaches.jpg'));

    if ( this.orange !== 0) {
      this.erroro = true;
    } else {
      this.erroro = false;
    }

    if ( this.apple !== 0) {
      this.errora = true;
    } else {
      this.errora = false;
    }
    if ( this.banana !== 0) {
      this.errorb = true;
    } else {
      this.errorb = false;
    }
    if ( this.peaches !== 0) {
      this.errorp = true;
    } else {
      this.errorp = false;
    }

    this.cookieValue = this.cookieService.get('data');
    if (this.cookieValue !== '') {
      this.prodsplit = this.cookieValue.split(',');
      for (this.x = 0; this.x < this.prodsplit.length; this.x++) {
        this.prod = this.prodsplit[this.x].split('-');
        this.addeds.push( new Addprod(this.prod[1], this.prod[0]));
      }
      this.empty = true;
    }
  }

  addedo() {
    if ( this.orange !== 0) {
      this.erroro = true;
      this.empty = true;
      this.addeds.push( new Addprod('orange', this.orange));
    } else {
      this.erroro = false;
    }
  }
  addeda() {
    if ( this.apple !== 0) {
      this.errora = true;
      this.empty = true;
      this.addeds.push( new Addprod('apple', this.apple));
    } else {
      this.errora = false;
    }
  }
  addedb() {
    if ( this.banana !== 0) {
      this.errorb = true;
      this.empty = true;
      this.addeds.push( new Addprod( 'banana', this.banana));
    } else {
      this.errorb = false;
    }
  }
  addedp() {
    if ( this.peaches !== 0) {
      this.errorp = true;
      this.empty = true;
      this.addeds.push( new Addprod( 'peaches', this.peaches));
    } else {
      this.errorp = false;
    }
  }
  addorange() {
    this.erroro = true;
    this.orange += 1;
  }
  suborange() {
    if (this.orange !== 0) {
      if (this.orange <= 1) {
        this.erroro = false;
      }
      this.orange -= 1;
    }
  }
  addapple() {
    this.errora = true;
    this.apple += 1;
  }
  subapple() {
    if (this.apple !== 0) {
      if (this.apple <= 1) {
        this.errora = false;
      }
      this.apple -= 1;
    }
  }

  addbanana() {
    this.errorb = true;
    this.banana += 1;
  }
  subbanana() {
    if (this.banana !== 0) {
      if (this.banana <= 1) {
        this.errorb = false;
      }
      this.banana -= 1;
    }
  }

  addpeaches() {
    this.errorp = true;
    this.peaches += 1;
  }
  subpeaches() {
    if (this.peaches !== 0) {
      if (this.peaches <= 1) {
        this.errorp = false;
      }
      this.peaches -= 1;
    }
  }
  removeproc(added, index) {
    this.addeds.splice(index , 1);
    if (this.addeds.length === 0) {
      this.empty = false;
    }
    this.product = '';
    if (this.addeds.length > 0) {
      for (this.i = 0; this.i < this.addeds.length; this.i++) {
        if (this.i === this.addeds.length - 1) {
          this.product += this.addeds[this.i].amount + '-' + this.addeds[this.i].type;
        } else {
          this.product += this.addeds[this.i].amount + '-' + this.addeds[this.i].type + ',';
        }
      }
    } else {
      this.product = '';
    }
    this.cookieService.set('data', this.product );
  }
  save_next() {
    this.product = '';
    for (this.i = 0; this.i < this.addeds.length; this.i++) {
      if (this.i === this.addeds.length - 1) {
        this.product += this.addeds[this.i].amount + '-' + this.addeds[this.i].type;
      } else {
        this.product += this.addeds[this.i].amount + '-' + this.addeds[this.i].type + ',';
      }
    }
    this.cookieService.set('data', this.product );
    // console.log(this.product);
    this.show = true;
  }
}
