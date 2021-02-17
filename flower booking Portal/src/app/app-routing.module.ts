import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent}from './dashboard/dashboard.component';
import {FlowerinfoComponent}from './flowerinfo/flowerinfo.component';
import {AboutComponent}from './about/about.component';
import {CartComponent}from './cart/cart.component';
import {LoginComponent}from './login/login.component';
import {SignupComponent}from './signup/signup.component';
import { AddressComponent } from './address/address.component';
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  {path:'dashboard',component:DashboardComponent },
  { path:'flower',component:FlowerinfoComponent},
  {path:'cart/:id' ,component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'address', component:AddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }