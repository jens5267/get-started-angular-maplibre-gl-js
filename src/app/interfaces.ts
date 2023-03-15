export interface Task {
  id: number;
  title: string;
  content: string;
  created_on: Date;
  due_date: Date;
  finished: Boolean;
}

export interface PolygonInstance {
  id: number;
  name: string;
  source: string;
  color: string;
}

export interface MarkerInstance {
  id: number;
  name: string;
  description: string;
  longitude: number;
  latitude: number;
}
