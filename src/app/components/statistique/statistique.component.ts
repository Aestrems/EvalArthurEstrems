import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from 'src/app/models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  @Input() statistique: Statistique | undefined;
  @Output() deleteStatistique: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  supStatistique(){
    this.deleteStatistique.emit(this.statistique?.id);
  }

}
