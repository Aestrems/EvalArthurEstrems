import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Statistique, StatistiqueURL } from '../models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  listeStatistique: Statistique[] = [];

  /*nombreEnfantPourcent: Statistique = {
    id: "fa1f5f40-be3b-11eb-91ec-7f5875ecfb46",
    title: "Pourcentage d'enfant",
    value: "60%"
  }

  nombreAdultePourcent: Statistique = {
    id: "fa1e6f59-be3b-11eb-91ec-9g3286ebfc46",
    title: "Pourcentage d'adulte",
    value: "40%"
  }

  nombreEtudiantPourcent: Statistique = {
    id: "fd4e6f59-nc6f-16eb-62nc-9g3286ebfc46",
    title: "Pourcentage d'étudiant",
    value: "20%"
  }*/
  
  constructor(private http : HttpClient) { 
    //this.listeStatistique = [this.nombreAdultePourcent, this.nombreEnfantPourcent];

    /*setTimeout(() => {
      this.listeStatistique.push(this.nombreEtudiantPourcent); 
      }, 3000);*/

      this.http.get<StatistiqueURL[]>("https://stats.naminilamy.fr/").subscribe(
      stats => {
        for (const stat of stats) {
          this.listeStatistique.push({
            id: stat.id,
            title: stat.title,
            value: stat.value
          });
        }

      }
    );
  }
}
