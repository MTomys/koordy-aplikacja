export interface Coordinate {
  lat: number;
  lng: number;
}

export interface CoordinateWithOccurences {
  coord: Coordinate;
  occurences: number;
}
