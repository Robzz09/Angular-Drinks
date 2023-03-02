export interface Meter {
  id: number;
  imageFilename: string;
  ldn: string;
  manualFilename: string;
  meterId: number;
  modifiedAt : string;
  name: string;
  pdr:string;
  registeredAt: string;
  suspended: boolean;
  target: number;
  lastMeasure: { //con la ? sto dicendo che è optionale es: lastMeasure?:
    date: string,
    delta: number,
    value: number,
  };
}
