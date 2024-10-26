import Button from "../Button/Button";
import ProjectCard from "./ProjectCard";
import Heading from "../Heading/Heading";
import tour1 from "../../assets/тбилиси.jpg";
import tour2 from "../../assets/стамбул.jpg";
import tour3 from "../../assets/дубай.jpg";
import tour4 from "../../assets/пхукет.jpg";

// структура данных
const projects = [
  {
    image: tour1,
    isPassengers: true,
    quantity: "10",
    destination: "Тбилиси",
    month: "апрель",
    price: "83.000",
    path: "на автобусе",
  },
  {
    image: tour2,
    isPassengers: false,
    quantity: "10",
    destination: "Стамбул",
    month: "март",
    price: "110.000",
    path: "на самолете",
  },
  {
    image: tour3,
    isPassengers: true,
    quantity: "15",
    destination: "Дубай",
    month: "июнь",
    price: "220.000",
    path: "на самолете",
  },
  {
    image: tour4,
    isPassengers: true,
    quantity: "11",
    destination: "Пхукет",
    month: "сентябрь",
    price: "135.000",
    path: "на самолете + паром",
  },
];

function ProjectsSection() {
  return (
    <div>
      <Heading level="h1" text="Галерея путешествий" />

      {projects.map((project) => (
        <ProjectCard
          image={project.image}
          isPassengers={project.isPassengers}
          quantity={project.quantity}
          destination={project.destination}
          month={project.month}
          price={project.price}
          path={project.path}
        />
      ))}

      <Button text="Посмотреть услуги" />
    </div>
  );
}

export default ProjectsSection;
