import "./ProjectCard.css";
import svg from "../../assets/svg.svg";

function ProjectCard(props) {
  console.log(props);

  return (
    <div className="project-inner">
      <div className="label">
        <div className="label-path">
          <span>{props.path}</span>
        </div>

        {props.isPassengers && (
          <div className="quantity-passengers">
            <span>{props.quantity}</span>
            <img src={svg} />
          </div>
        )}
      </div>

      <img className="project-img" src={props.image} alt={props.destination} />
      <span className="project-description">
        {props.destination}, {props.month} — {props.price}
      </span>
    </div>
  );
}

export default ProjectCard;
