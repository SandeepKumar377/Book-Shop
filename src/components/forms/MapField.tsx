import { useFormikContext } from "formik";
import coordinateDTO from "../../models/coordinates.model";
import Map from "../utilities/Map";

export default function MapField(props: mapFieldProps) {
  const { values } = useFormikContext<any>();

  function handleMapClick(coordinates: coordinateDTO) {
    values[props.latField] = coordinates.lat;
    values[props.lngField] = coordinates.lng;
  }

  return (
    <Map
      coordinates={props.coordinates}
      handleMapClick={handleMapClick}
      height="500px"
      readOnly={false}
    />
  );
}

interface mapFieldProps {
  coordinates: coordinateDTO[];
  latField: string;
  lngField: string;
}

MapField.defaultProps = {
  coordinates: [],
};
