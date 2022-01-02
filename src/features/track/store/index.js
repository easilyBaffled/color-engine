import { segment, position } from "./factory/segment";
import { addTweenColors, blue, red, yellow } from "@/features/color";
import {
  buildAddMoveCard,
  buildRemoveMoveCard,
} from "@/features/meta/store/factory";
import { moveCard } from "@/features/card/store/factory/moveCard";
import { createSlice } from "@reduxjs/toolkit";
import { adapter } from "./entities";

const initialState = addTweenColors([red, yellow, blue], 5).map((color, i) =>
  segment({
    color: color.color,
    pos: position(i),
    qual: {
      0: buildRemoveMoveCard(1),
      0.6: buildAddMoveCard(moveCard(color)),
      1: buildAddMoveCard([moveCard(color), moveCard(color)]),
    },
  })
);

export const slice = createSlice({
  name: "segments",
  initialState: adapter.getInitialState(initialState),
});
