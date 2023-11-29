import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedecinComponent } from './medecin/medecin.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { UpdateMedecinComponent } from './update-medecin/update-medecin.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { medecinGuard } from './medecin.guard';
import { RechercheParFaculteComponent } from './recherche-par-faculte/recherche-par-faculte.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
  {path: "medecin", component : MedecinComponent},
  {path: "add-medecin", component : AddMedecinComponent,canActivate:[medecinGuard]},
  {path: "updatemedecin/:id", component: UpdateMedecinComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "rechercheParFaculte", component : RechercheParFaculteComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},

  {path: "", redirectTo: "medecin", pathMatch: "full" }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
