

export interface User {
  email: string;
  role: 'admin' | 'customer';
  password?: string;
  lastSpinDate?: string;
}

export interface AuthState {
  email: string;
  role: 'admin' | 'customer';
}

export interface Prize {
  id: number;
  nameKey: string; // Stable identifier, e.g., 'prize_lip_glow'
  names: {
    en: string;
    fr: string;
    vi: string;
  };
  image: string; // URL to the image
  weight: number; // for probability
}

export interface Winner {
  name:string;
  address: string;
  email: string;
  prize: string;
  date: string; // ISO string
}