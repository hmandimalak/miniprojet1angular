import { faculte } from './../model/faculte.model';
import { Component } from '@angular/core';
import { medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-recherche-par-medecin',
  templateUrl: './recherche-par-Faculte.component.html',
  styleUrls: ['./recherche-par-Faculte.component.css']
})
export class RechercheParFaculteComponent {
medecin:medecin[]=[];
idfac!:number;
faculte:faculte[]=[];
ngOnInit(): void {
  this.faculte = this.medecinService.listefacultes();
  }
constructor(private medecinService:MedecinService){}
onChange() {
  console.log('Selected Type ID:', this.idfac);

  // Call the service to filter medecin based on the selected Type
  this.medecin= this.medecinService.rechercherParFaculte(this.idfac);

  // Debugging statement
  console.log('Filtered medecin:', this.medecin);
}
}