export interface Poke {
  count: number;
  next: string;
  previous?: any;
  results: any;
  name: string;
  status: any;
}

export interface Result {
  name: string;
  url: string;
  status: any;
}
