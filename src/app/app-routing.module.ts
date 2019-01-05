import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from 'src/app/components/homepage/homepage.component';
import {ShopComponent} from 'src/app/components/shop/shop.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
