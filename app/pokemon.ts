export class Pokemon {
  id: number;
  name: string;
  sprite: string;
  types: string[];
  moves: string[];
  stats: Stat[];
}

export class Stat {
  name: string;
  value: number;
}
