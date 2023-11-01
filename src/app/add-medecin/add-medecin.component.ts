import { Component, OnInit } from '@angular/core';
import { medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faculte } from '../model/faculte.model';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html'
})
export class AddMedecinComponent implements OnInit{
  newmedecin = new medecin();
  facultes! : faculte[];
  newIdfac! : number;
  newfaculte! :faculte;

  constructor(private activatedRoute: ActivatedRoute,
              private medecinService : MedecinService,
              private router :Router){}
  ngOnInit(): void {
    this.facultes=this.medecinService.listefacultes();
  
      }
              
  
  addmedecin(){
    console.log(this.newIdfac);
    this.newfaculte=this.medecinService.consulterfacultes(this.newIdfac);
    this.newmedecin.faculte =this.newfaculte;
    this.medecinService.ajoutermedecin(this.newmedecin);
    this.router.navigate(['medecin']);
}

  }


