import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListProductComponent } from './list-product/list-product.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ListProduct', component: ListProductComponent },
  { path: 'Promotion', component: PromotionComponent },
  { path: 'Client', component: ClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
