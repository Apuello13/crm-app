export interface CustomerObservation {
  date: number;
  observations: IObservation[];
}

export interface IObservation {
  id: string;
  observation: string;
  time: number;
}
