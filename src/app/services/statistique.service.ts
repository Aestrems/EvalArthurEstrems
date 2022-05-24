import { Injectable } from '@angular/core';
import { Statistique } from '../models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

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

  nombreEtudiantPourcent: Statistique = {
    id: "fd4e6f59-nc6f-16eb-62nc-9g3286ebfc46",
    titre: "Pourcentage d'étudiant",
    valeur: "20%"
  }
  
  constructor() { 
    this.listeStatistique = [this.nombreAdultePourcent, this.nombreEnfantPourcent];
    setTimeout(() => {
      this.listeStatistique.push(this.nombreEtudiantPourcent); 
      }, 3000);
  }
}
