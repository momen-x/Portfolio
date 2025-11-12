import { MdWeb } from "react-icons/md";
import { BsDatabaseAdd } from "react-icons/bs";

import { IconType } from "react-icons";


interface IServices {
  title: string;
  Icon: IconType; // or React.ElementType
}

const services: IServices[] = [
  {
    Icon: MdWeb,
    title: "Front end Web developer",
  },
  {
    Icon: BsDatabaseAdd,
    title: "Basic for back end developer",
  },
];

export default services;
