import { Component } from '@angular/core';
import { medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {
  medecin:medecin[]=[];
  allmedecin:medecin[]=[];
  nommedecin!:String;
  searchTerm!:string;
  ngOnInit(): void {
    this.medecin = this.MedecinService.listemedecin();
    this.allmedecin=this.medecin;
    }
  constructor(private MedecinService:MedecinService){}
  onChange() {
    this.medecin = this.MedecinService.rechercherParNom(this.searchTerm);
    console.log('Filtered medecin:', this.medecin);
  }
  onKeyUp(filterText : string){ this.medecin = this.medecin.filter(item => item.nommedecin.toLowerCase().includes(filterText)); }
  
}