import { Component, OnInit } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  title = 'EvalArthurEstrems'; 

  listeStatistique: Statistique[];

  nombreEnfantPourcent: Statistique = {
    id: "fa1f5f40-be3b-11eb-91ec-7f5875ecfb46",
    titre: "Pourcentage d'enfant",
    valeur: "60%"
  }

  nombreAdultePourcent: Statistique = {
    id: "fa1e6f59-be3b-11eb-91ec-9g3286ebfc46",
    titre: "Pourcentage d'adulte",
    valeur: "40%"
  }

  constructor() {
    this.listeStatistique = [this.nombreAdultePourcent, this.nombreEnfantPourcent];
  }
}
