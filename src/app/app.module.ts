import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { WishListComponent } from './components/base/wish-list/wish-list.component';
import { CatalogueComponent } from './components/base/catalogue/catalogue.component';
import { BaseComponent } from './components/base/base.component';
import { NavbarComponent } from './components/base/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './components/base/profile/profile.component';
import { SharedModule } from 'src/shared/shared.module';
import { ReadMoreModalComponent } from './components/home/read-more-modal/read-more-modal.component';
import { ExploreComponent } from './components/base/explore/explore.component';
import { AddTokenInterceptor } from 'src/helper/add-token.interceptor';
import { LoginComponent } from './components/home/login/login.component';
import { RegisterComponent } from './components/home/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WishListComponent,
    CatalogueComponent,
    BaseComponent,
    NavbarComponent,
    ProfileComponent,
    ReadMoreModalComponent,
    ExploreComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
