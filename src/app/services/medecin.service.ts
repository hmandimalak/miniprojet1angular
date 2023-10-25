import { Injectable } from '@angular/core';
import { medecin } from '../model/medecin.model';


@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  medecin : medecin[] ;
 

  constructor() {
    this.medecin = [
      {idmedecin : 1, nommedecin : "ahmed", specialite : "Cardiologue", datenaissance: new Date("01/14/1970"), faculte :"fmt"},
      {idmedecin : 2, nommedecin : "najib", specialite : "Dermatologue", datenaissance : new Date("12/17/1980"),faculte :"fms"},
      {idmedecin : 3, nommedecin :"selim", specialite : "Neurologue", datenaissance: new Date("02/20/1975"), faculte :"fmm"}];
   }
   listemedecin():medecin[] {
    return this.medecin;
   }
   ajoutermedecin( med: medecin){
    this.medecin.push(med);
    }
    supprimermedecin( med: medecin){
      const index = this.medecin.indexOf(med, 0);
      if (index > -1) {
      this.medecin.splice(index, 1);
      }}

    consultermedecin(id :Number): medecin{
        return this.medecin.find(med => med.idmedecin == id)!;

      }
      trierProduits(){
        this.medecin = this.medecin.sort((n1,n2) => {
        if (n1.idmedecin! > n2.idmedecin!) {
          return 1;
        }
        if (n1.idmedecin! < n2.idmedecin!) {
          return -1;
        }
        return 0;
      });
      }
    updatemedecin(med:medecin)
      {
      this.supprimermedecin(med);
      this.ajoutermedecin(med);
      this.trierProduits();
      }
    }


