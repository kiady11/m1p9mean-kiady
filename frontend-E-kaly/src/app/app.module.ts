import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ListPlatsComponent } from './components/list-plats/list-plats.component';
import { LoginComponent } from './components/login/login.component';
import { AddPlatsComponent } from './components/add-plats/add-plats.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ListPlatsComponent,
    LoginComponent,
    AddPlatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
