import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ListPlatsComponent } from './components/plats/list-plats/list-plats.component';
import { LoginComponent } from './components/login/login.component';
import { AddPlatsComponent } from './components/plats/add-plats/add-plats.component';
import { PlatsDetailComponent } from './components/plats/plats-detail/plats-detail.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaiementPlatComponent } from './components/client/paiement-plat/paiement-plat.component';
import { AdminRestaurantComponent } from './components/restaurant/admin-restaurant/admin-restaurant.component';
import { ListLivraisonComponent } from './components/livreur/list-livraison/list-livraison.component';
import { AdminEKalyComponent } from './components/admin-e-kaly/admin-e-kaly.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ListPlatsComponent,
    LoginComponent,
    AddPlatsComponent,
    PlatsDetailComponent,
    NavBarComponent,
    FooterComponent,
    PaiementPlatComponent,
    AdminRestaurantComponent,
    ListLivraisonComponent,
    AdminEKalyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    MatSliderModule,
    MatRadioModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
