
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';




import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    
    
    ProductsComponent,
    
  
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    RouterModule.forRoot([
     
      { path: 'Products', component:ProductsComponent},
   
      
  



    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
