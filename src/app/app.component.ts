import { Component } from '@angular/core';
import { StatistiqueService } from './services/statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  title = 'EvalArthurEstrems'; 

  public statistiqueService: StatistiqueService;
  constructor(statistiqueService: StatistiqueService) {
    this.statistiqueService = statistiqueService;
  }

  deleteStatistique(id: string){
    const index: number = this.statistiqueService.listeStatistique.findIndex(stat => stat.id === id); 
    if (index !== -1) { 
      this.statistiqueService.listeStatistique.splice(index, 1); 
    }
  }
}
