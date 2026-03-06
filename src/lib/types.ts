export interface BookMeta {
  slug: string;
  title: string;
  author: string;
  year: number;
  thesis: string;
  accent?: string;
  collection?: number;
}

export interface Framework {
  name: string;
  explanation: string;
  keyPrinciple: string;
}

export interface MentalModel {
  name: string;
  description: string;
}
