import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from '../services/medecin.service';
import { medecin } from '../model/medecin.model';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html'
})
export class UpdateMedecinComponent implements OnInit{
  currentmedecin = new medecin();
  message : string | undefined;

  constructor(private activatedRoute: ActivatedRoute,
                private router :Router,
                private medecinService: MedecinService){}

  ngOnInit() {
    this.currentmedecin = this.medecinService.consultermedecin(this.activatedRoute.snapshot. params['id']);
    console.log(this.currentmedecin);
  }
  updatemedecin()
  { //console.log(this.currentmedecin);
    this.medecinService.updatemedecin(this.currentmedecin);
    this.router.navigate(['medecin']);
    this.message = "medecin "+ this.currentmedecin.nommedecin +" modifié avec succée !";
}


}
