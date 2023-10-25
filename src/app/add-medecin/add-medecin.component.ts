import { Component } from '@angular/core';
import { medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html'
})
export class AddMedecinComponent {
  newmedecin = new medecin();
  message : string | undefined;
  constructor(private medecinService : MedecinService){}
  
  addmedecin(){
    //console.log(this.newmedecin);
    this.medecinService.ajoutermedecin(this.newmedecin);
    this.message = "medecin "+ this.newmedecin.nommedecin +" ajouté avec succée !";
  }

}
