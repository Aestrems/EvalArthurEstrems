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
}
