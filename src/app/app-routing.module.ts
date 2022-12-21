import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './components/base/catalogue/catalogue.component';
import { HomeComponent } from './components/home/home.component';
import { WishListComponent } from './components/base/wish-list/wish-list.component';
import { BaseComponent } from './components/base/base.component';
import { ProfileComponent } from './components/base/profile/profile.component';
import { ExploreComponent } from './components/base/explore/explore.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: BaseComponent, children: [
    { path: 'catalogue', component: CatalogueComponent},
    { path: 'explore', component: ExploreComponent},
    { path: 'wishList/:username', component: WishListComponent},
    { path: 'profile', component: ProfileComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }