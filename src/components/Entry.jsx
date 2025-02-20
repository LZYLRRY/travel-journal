import marker from "../images/marker.png";

export default function Entry(props) {
  console.log(props);
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="main-image"
          src={props.obj.img?.src}
          alt={props.obj.img?.alt}
        />
      </div>

      <div className="info-container">
        <img className="marker" src={marker} alt="Marker icon" />
        <span className="country">{props.obj.country}</span>
        <a href={props.obj.googleMapsLink}>View on Google Maps</a>
        <h2 className="entry-title">{props.obj.title}</h2>
        <p className="trip-dates">{props.obj.dates}</p>
        <p className="entry-text">{props.obj.text}</p>
      </div>
    </article>
  );
}
