import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlatsComponent } from './components/plats/add-plats/add-plats.component';
import { ListPlatsComponent } from './components/plats/list-plats/list-plats.component';
import { PlatsDetailComponent } from './components/plats/plats-detail/plats-detail.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-plats' },
  { path: 'list-plats', component:  ListPlatsComponent},
  { path: 'add-plats', component: AddPlatsComponent },
  { path: 'edit-plat/:id', component: PlatsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
