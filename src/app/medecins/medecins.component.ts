import { Component } from '@angular/core';
import { Medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecins.component.html'
})
export class MedecinComponent {
  medecins?: Medecin[] ; 
 


  
  constructor(private medecinService : MedecinService,
              public authService: AuthService){
    //this.medecins = medecinService.listemedecin();
    
    
  }
  ngOnInit(): void {
   this.chargerMedecins();
  
  }
  chargerMedecins(){
    this.medecinService.listemedecin().subscribe(meds => {
      console.log(meds);
      this.medecins = meds;
      });
      }
  
  supprimerMedecin(med: Medecin)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.medecinService.supprimerMedecin(med.idmedecin).subscribe(() => {
console.log("medecin supprimé");
this.chargerMedecins();
});
}
}
