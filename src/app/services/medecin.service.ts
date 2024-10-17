
import { Injectable } from '@angular/core';
import { Medecin } from '../model/medecin.model';
import { Faculte } from '../model/faculte.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FaculteWrapper } from '../model/faculte.Wrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  apiURLFAC: string = 'http://localhost:8100/medecins/fac';

  apiURL: string = 'http://localhost:8100/medecins/api';
  medecins: Medecin[] =[];
  //facultes: faculte[]


  constructor(private http : HttpClient){
  
      
  }
  listemedecin(): Observable<Medecin[]> {
    return this.http.get<Medecin[]>(this.apiURL);
  }
  ajoutermedecin(med: Medecin):Observable<Medecin> {
    return this.http.post<Medecin>(this.apiURL, med, httpOptions);
  }
  
  supprimerMedecin(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }
    
    consulterMedecin(id: number): Observable<Medecin> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Medecin>(url);
      }
  triermedecin() {
    this.medecins = this.medecins.sort((n1, n2) => {
      if (n1.idmedecin! > n2.idmedecin!) {
        return 1;
      }
      if (n1.idmedecin! < n2.idmedecin!) {
        return -1;
      }
      return 0;
    });
  }
  updateMedecin(med :Medecin) : Observable<Medecin>
  {
      return this.http.put<Medecin>(this.apiURL, med, httpOptions);
  }
  listeFacultes():Observable<FaculteWrapper>{
    return this.http.get<FaculteWrapper>(this.apiURLFAC);
    }

 /*
  consulterfacultes(id: number): faculte {
    return this.facultes.find(fac => fac.idfac == id)!;
  } */
/*   rechercherParFaculte(idfac: number): Medecin[] {
    console.log("Selected genre ID (Type):", typeof idfac);

    const filterevet = this.medecins.filter(med => {
      console.log("idfac", idfac);
      console.log("medecin", med.faculte.idfac);
      console.log("Concert with Genre:", med);
      return med.faculte.idfac == idfac;
    });
    console.log("Filtered Concerts:", filterevet);

    if (filterevet.length === 0) {
      console.log("Aucun concert trouvé");
    }

    return filterevet;
  } */
    rechercherParFaculte(idfac: number):Observable< Medecin[]> {
      const url = `${this.apiURL}/medsfac/${idfac}`;
      return this.http.get<Medecin[]>(url);
      }
      
    rechercherParNom(nommedecin: string):Observable< Medecin[]> {
      const url = `${this.apiURL}/medsByName/${nommedecin}`;
      return this.http.get<Medecin[]>(url);
    }
    ajouterFaculte( fac: Faculte):Observable<Faculte>{
      return this.http.post<Faculte>(this.apiURLFAC, fac, httpOptions);
      }
      



}


