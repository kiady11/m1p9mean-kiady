import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlatsComponent } from './components/plats/admin-restaurant/add-plats/add-plats.component';
import { ListPlatsComponent } from './components/plats/admin-restaurant/list-plats/list-plats.component';
import { PlatsDetailComponent } from './components/plats/admin-restaurant/plats-detail/plats-detail.component';
import { PaiementPlatComponent } from './components/plats/clients/paiement-plat/paiement-plat.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-plats' },
  { path: 'list-plats', component:  ListPlatsComponent},
  { path: 'add-plats', component: AddPlatsComponent },
  { path: 'edit-plat/:id', component: PlatsDetailComponent },
  { path:'paimentPlat/:id', component: PaiementPlatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
