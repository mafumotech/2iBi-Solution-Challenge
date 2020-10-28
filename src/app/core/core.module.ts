import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
  ],

  exports:[
    // shared modules
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // shared components
    HeaderComponent,
    HomeComponent,
    LoginComponent,
  ],

})
export class CoreModule {}
