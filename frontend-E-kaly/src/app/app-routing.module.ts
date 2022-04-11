import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { LoginComponent } from './components/login/login.component';
import { AddPlatsComponent } from './components/plats/admin-restaurant/add-plats/add-plats.component';
import { ListPlatsComponent } from './components/plats/admin-restaurant/list-plats/list-plats.component';
import { PlatsDetailComponent } from './components/plats/admin-restaurant/plats-detail/plats-detail.component';
import { AccueilComponent } from './components/plats/clients/accueil/accueil.component';
import { PaiementPlatComponent } from './components/plats/clients/paiement-plat/paiement-plat.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
  { path: 'accueil', component: AccueilComponent},
  { path: 'list-plats', component:  ListPlatsComponent},
  { path: 'add-plats', component: AddPlatsComponent },
  { path: 'edit-plat/:id', component: PlatsDetailComponent },
  { path: 'paimentPlat/:id', component: PaiementPlatComponent},
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
