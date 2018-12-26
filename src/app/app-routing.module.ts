import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {homepage} from '/src/app/components/homepage';
// import {shop} from '/src/app/components/shop';
const routes: Routes = [
  // { path: 'app-homepage', component: homepage},
  // {path: 'app-shop', component: shop}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
