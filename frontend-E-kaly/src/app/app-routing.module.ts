import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlatsComponent } from './components/add-plats/add-plats.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ListPlatsComponent } from './components/list-plats/list-plats.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-book' },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'list-plats', component:  ListPlatsComponent},
  { path: 'add-plats', component: AddPlatsComponent },
  // { path: 'edit-book/:id', component: BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
