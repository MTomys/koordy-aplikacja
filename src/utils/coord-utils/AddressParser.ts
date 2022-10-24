import Geocode from "react-geocode";
import { Coordinate } from "../interfaces/interfaces";

Geocode.setLanguage("en");

export const parseFromTextFile = async (textFile: string[]) => {
  let parsedCoordData: Coordinate[] = [];

  textFile.forEach((line) =>
    Geocode.fromAddress(line).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(`{ lat: ${lat}}`);
        parsedCoordData.push({ lat, lng });
      },
      (error) => {
        console.error(error);
      }
    )
  );

  return parsedCoordData;
};
