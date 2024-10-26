import "./Heading.css";

function Heading(props) {
  // console.log(props);

  return <h1 className="heading-title">{props.text}</h1>;
}

export default Heading;
