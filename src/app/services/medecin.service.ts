import { medecin } from './../model/medecin.model';
import { Injectable } from '@angular/core';
import { medecin } from '../model/medecin.model';
import { faculte } from '../model/faculte.model';


@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  medecin: medecin[];
  facultes: faculte[]


  constructor() {
    this.facultes = [
      { idfac: 1, nomfac: "fms" },
      { idfac: 2, nomfac: "fmt" },
      { idfac: 3, nomfac: "fmm" },
      { idfac: 4, nomfac: "fmdm" }


    ];
    this.medecin = [
      {
        idmedecin: 1, nommedecin: "ahmed", specialite: "Cardiologue", datenaissance: new Date("01/14/1970"),
        faculte: { idfac: 1, nomfac: "fms" }
      },
      {
        idmedecin: 2, nommedecin: "najib", specialite: "Dermatologue", datenaissance: new Date("12/17/1980"),
        faculte: { idfac: 2, nomfac: "fmt" }
      },
      {
        idmedecin: 3, nommedecin: "selim", specialite: "Neurologue", datenaissance: new Date("02/20/1975"),
        faculte: { idfac: 1, nomfac: "fms" }
      }];
  }
  listemedecin(): medecin[] {
    return this.medecin;
  }
  ajoutermedecin(med: medecin) {
    this.medecin.push(med);
  }
  supprimermedecin(med: medecin) {
    const index = this.medecin.indexOf(med, 0);
    if (index > -1) {
      this.medecin.splice(index, 1);
    }
  }

  consultermedecin(id: Number): medecin {
    return this.medecin.find(med => med.idmedecin == id)!;

  }
  triermedecin() {
    this.medecin = this.medecin.sort((n1, n2) => {
      if (n1.idmedecin! > n2.idmedecin!) {
        return 1;
      }
      if (n1.idmedecin! < n2.idmedecin!) {
        return -1;
      }
      return 0;
    });
  }
  updatemedecin(med: medecin) {
    this.supprimermedecin(med);
    this.ajoutermedecin(med);
    this.triermedecin();
  }
  listefacultes(): faculte[] {
    return this.facultes;
  }
  consulterfacultes(id: number): faculte {
    return this.facultes.find(fac => fac.idfac == id)!;
  }
  rechercherParFaculte(idfac: number): medecin=[] {
    console.log("Selected genre ID (Type):", typeof idfac);

    const filterevet = this.medecin.filter(med => {
      console.log("idfac", idfac);
      console.log("slm", med.Type.idfac);
      console.log("Concert with Genre:", med);
      return med.Type.idfac == idfac;
    });
    console.log("Filtered Concerts:", filterevet);

    if (filterevet.length === 0) {
      console.log("Aucun concert trouvé");
    }

    return filterevet;
  }
  rechercherParNom(nommedecin: String): medecin[] {
    const filterevet = this.med.filter(med => {
      return med.nommedecin.toLowerCase().includes(nommedecin.toLowerCase());
    });
    console.log("Filtered Concerts:", filterevet);
    return filterevet;
  }


}


