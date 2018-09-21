import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CookieService } from 'ngx-cookie-service';
import { FormComponent } from './cart/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
