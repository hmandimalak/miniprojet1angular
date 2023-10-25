import { Component } from '@angular/core';
import { medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html'
})
export class MedecinComponent {
  medecin : medecin[] ;
 


  
  constructor(private medecinService : MedecinService){
    this.medecin = medecinService.listemedecin();
    
    
  }
  supprimermedecin(med: medecin)
  {
    //console.log(med);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.medecinService.supprimermedecin(med);
  }

}
