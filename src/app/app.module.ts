import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { HomeComponent } from './home/home.component';
import { PromotionComponent } from './promotion/promotion.component';
import { MsProductService } from './service/MsProduct/ms-product.service';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './client/client.component';
import { ClientService } from './service/MsClient/ms-client.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    HomeComponent,
    ClientComponent,
    PromotionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    MsProductService,
    ClientService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
