export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Car {
  id: string;
  model: string;
  brand: string;
  color: string;
  year: number;
}

export type TabType = 'home' | 'cars' | 'profile';