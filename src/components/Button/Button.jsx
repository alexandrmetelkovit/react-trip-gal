import "./Button.css";

function Button(props) {
  return (
    <>
      <button className="projects-button">{props.text}</button>
    </>
  );
}

export default Button;
