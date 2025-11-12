
import BallCanvas from "./BallCanvas";
import { technologies } from "../data/technologies";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas path={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
