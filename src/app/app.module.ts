import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { WishListComponent } from './components/base/wish-list/wish-list.component';
import { CatalogueComponent } from './components/base/catalogue/catalogue.component';
import { BaseComponent } from './components/base/base.component';
import { NavbarComponent } from './components/base/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WishListComponent,
    CatalogueComponent,
    BaseComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
