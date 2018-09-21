import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  forminfo = 'No previous form';
  infos: string[] = [];
  constructor( private cookieService: CookieService) {
    this.forminfo = this.cookieService.get('form_info');
    this.infos = this.forminfo.split('\n');
  }
}

