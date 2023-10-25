import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedecinComponent } from './medecin/medecin.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { UpdateMedecinComponent } from './update-medecin/update-medecin.component';

const routes: Routes = [
  {path: "medecin", component : MedecinComponent},
  {path: "add-medecin", component : AddMedecinComponent},
  {path: "updatemedecin/:id", component: UpdateMedecinComponent},
  {path: "", redirectTo: "medecin", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
