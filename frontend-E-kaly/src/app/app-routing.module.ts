import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ListPlatsComponent } from './components/list-plats/list-plats.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: '/', component: ListPlatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
