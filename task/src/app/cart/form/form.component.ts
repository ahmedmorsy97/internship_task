import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  street_no = '';
  street_name = '';
  country = '';
  city = '';
  zip_code = '';
  number: string;
  phone: string[] = [];
  // form = false;
  formInfo = '';
  i = 0;
  constructor( private cookieService: CookieService) { }

  ngOnInit() {
    // console.log(this.phone.length);
  }
  onSubmit(f) {
    // empty string to show only one form
    this.formInfo = '';
    this.formInfo += 'Street name: ' + this.street_name + '\n';
    this.formInfo += 'Street number: ' + this.street_no + '\n';
    this.formInfo += 'Country: ' + this.country + '\n';
    this.formInfo += 'City: ' + this.city + '\n';
    this.formInfo += 'Zip Code: ' + this.zip_code + '\n';
    this.formInfo += 'Phone number/s:' +  '\n';
    for (this.i = 0; this.i < this.phone.length; this.i++) {
      this.formInfo += this.phone[this.i].toString() +  '\n';
    }
    this.cookieService.set('form_info', this.formInfo);
  }
  addnum() {
    this.phone.push(this.number);
  }

}
