export class Statistique {
    id : string;
    title : string;
    value : string;

    constructor(id: string, titre: string, value: string){
      this.id = id;
      this.title = titre;
      this.value = value;
    }
  }

export type StatistiqueURL = {
  id : string;
  title : string;
  value : string;
  updatedAt : number;
}