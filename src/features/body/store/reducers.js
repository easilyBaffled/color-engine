import { bodiesAdapter, staticChange, dynamicChange } from "./entities";
import { body } from "./factory/body";
import { shell } from "./factory/shell";
import { moveCard } from "@/features/card/store/factory/moveCard";
import { green } from "@/features/color";
import { position } from "@/features/track/store";

const initialState = [
  body({
    color: "red",
    moves: [moveCard.avg(), moveCard.avg(), moveCard.avg()],
  }),
  body({
    color: "yellow",
    moves: [moveCard.avg(), moveCard.avg(), moveCard.avg()],
  }),
  shell({
    color: green.color,
    moves: [moveCard(green), moveCard(green), moveCard(green)],
    pos: position({ val: 3 }),
  }),
];
