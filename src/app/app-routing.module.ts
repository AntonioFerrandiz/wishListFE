import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './components/base/catalogue/catalogue.component';
import { HomeComponent } from './components/home/home.component';
import { WishListComponent } from './components/base/wish-list/wish-list.component';
import { BaseComponent } from './components/base/base.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: BaseComponent, children: [
    { path: 'catalogue', component: CatalogueComponent},
    { path: 'wishList', component: WishListComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }