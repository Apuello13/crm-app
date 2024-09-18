export interface CustomerObservation {
  date: number;
  observations: Observation[];
}

interface Observation {
  id: string;
  observation: string;
  time: string;
}
