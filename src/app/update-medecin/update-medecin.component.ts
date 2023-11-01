import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from '../services/medecin.service';
import { medecin } from '../model/medecin.model';
import { faculte } from '../model/faculte.model';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html'
})
export class UpdateMedecinComponent implements OnInit{
  currentmedecin = new medecin();
  facultes! :faculte[];
  updateFacId! :number;

  constructor(private activatedRoute: ActivatedRoute,
                private router :Router,
                private medecinService: MedecinService){}

  ngOnInit() {
    this.facultes=this.medecinService.listefacultes();
    this.currentmedecin = this.medecinService.consultermedecin(this.activatedRoute.snapshot. params['id']);
    this.updateFacId=this.currentmedecin.faculte.idfac;
    //console.log(this.currentmedecin);
  }
  updatemedecin()
  { //console.log(this.currentmedecin);
    this.currentmedecin.faculte=this.medecinService.consulterfacultes(this.updateFacId);
    this.medecinService.updatemedecin(this.currentmedecin);
    this.router.navigate(['medecin']);
}


}
