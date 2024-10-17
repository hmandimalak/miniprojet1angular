import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from '../services/medecin.service';
import { Medecin } from '../model/medecin.model';
import { Faculte } from '../model/faculte.model';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html'
})
export class UpdateMedecinComponent implements OnInit{
  currentMedecin = new Medecin();
  facultes! :Faculte[];
  updateFacId! :number;

  constructor(private activatedRoute: ActivatedRoute,
                private router :Router,
                private medecinService: MedecinService){}

  
    ngOnInit():void {
      this.medecinService.listeFacultes().
      subscribe(facs => {this.facultes = facs._embedded.facultes;
      console.log(facs);
      });

      this.medecinService.consulterMedecin(this.activatedRoute.snapshot.params['id']).
       subscribe( med =>{ this.currentMedecin = med; 
      this.updateFacId =
      this.currentMedecin.faculte.idfac;

       } ) ;
      }
      
  
  updateMedecin(){
    this.currentMedecin.faculte = this.facultes.
    find(fac => fac.idfac == this.updateFacId)!;
  this.medecinService.updateMedecin(this.currentMedecin).subscribe(med => {
  this.router.navigate(['medecins']); }
    );
    }
    

}
