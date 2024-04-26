import { Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types"; // Importez PropTypes depuis la bibliothèque prop-types
import styles from "./pin.module.scss";
import { Link } from "react-router-dom";

// ce composant permet d'afficher les logements sur la carte

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      {" "}
      {/* Assurez-vous que les propriétés sont correctement orthographiées, par exemple 'latitude' et 'longitude' */}
      <Popup>
        <div className={styles.popupContainer}>
          <img src={item.img} alt="img" />
          <div className={styles.textContainer}>
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>{item.price} €</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

// Ajoutez la validation des props avec PropTypes
Pin.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bedroom: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Pin;
