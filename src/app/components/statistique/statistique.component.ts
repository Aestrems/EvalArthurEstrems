import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from 'src/app/models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  @Input() statistique: Statistique | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
