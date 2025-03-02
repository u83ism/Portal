export interface Category {
  [key: string]: string;
}

export interface MyApp {
  id: number;
  category: string;
  name: string;
  url: string;
  explanation: string;
}

export interface ServiceAccount {
  category: string;
  serviceName: string;
  url: string;
  explanation: string;
  iconPath?: string; // Optional path to the icon image
  icon?: string; // Optional SVG icon string
}
