import { Coordinate, CoordinateWithOccurences } from "../interfaces/interfaces";

const coordToKey = (coord: Coordinate) => `${coord.lat},   ${coord.lng}`;

const keyToCoord = (key: string) => {
  const [lat, lng] = key.split(",").map(Number);

  return { lat, lng };
};

export const parseCoordData = (
  data: Coordinate[]
): CoordinateWithOccurences[] => {
  const map = new Map<Coordinate, number>(
    [
      ...data
        .reduce((map, coord) => {
          return map.set(
            coordToKey(coord),
            (map.get(coordToKey(coord)) ?? 0) + 1
          );
        }, new Map<string, number>())
        .entries(),
    ].map(([key, value]) => [keyToCoord(key), value])
  );

  const cordsWithOccurences: CoordinateWithOccurences[] = [];

  map.forEach((occurence, coordinate) => {
    cordsWithOccurences.push({ coord: coordinate, occurences: occurence });
  });

  return cordsWithOccurences;
};
