import { StaticImageData } from "next/image";

import * as icons from "@/planets-icon";

interface Planet {
  name: string;
  gravity: number;
  color: string;
  icon: StaticImageData;
  description: string;
}

export const planets: Planet[] = [
  {
    name: "Солнце",
    gravity: 27.94,
    color: "#ffcc00",
    icon: icons.sun,
    description: "Наша звезда и источник света",
  },
  {
    name: "Меркурий",
    gravity: 0.38,
    color: "#a5a5a5",
    icon: icons.mercury,
    description: "Ближайшая к Солнцу",
  },
  {
    name: "Венера",
    gravity: 0.91,
    color: "#E5946C",
    icon: icons.venus,
    description: "Горячая и таинственная",
  },
  {
    name: "Луна",
    gravity: 0.17,
    color: "#cccccc",
    icon: icons.moon,
    description: "Спутник Земли",
  },
  {
    name: "Марс",
    gravity: 0.38,
    color: "#c1440e",
    icon: icons.mars,
    description: "Красная планета",
  },
  {
    name: "Юпитер",
    gravity: 2.34,
    color: "#e0c17c",
    icon: icons.jupiter,
    description: "Газовый гигант",
  },
  {
    name: "Сатурн",
    gravity: 1.07,
    color: "#f5d76e",
    icon: icons.saturn,
    description: "Властелин колец",
  },
  {
    name: "Уран",
    gravity: 0.89,
    color: "#64d8cb",
    icon: icons.uranus,
    description: "Ледяной гигант",
  },
  {
    name: "Нептун",
    gravity: 1.14,
    color: "#4d7cff",
    icon: icons.neptune,
    description: "Синий гигант",
  },
  {
    name: "Плутон",
    gravity: 0.06,
    color: "#d6d6d6",
    icon: icons.pluto,
    description: "Карликовая планета",
  },
  {
    name: "Европа",
    gravity: 0.13,
    color: "#b0c4de",
    icon: icons.europa,
    description: "Ледяной спутник Юпитера",
  },
  {
    name: "Титан",
    gravity: 0.14,
    color: "#d4af37",
    icon: icons.titan,
    description: "Спутник Сатурна с атмосферой",
  },
];
