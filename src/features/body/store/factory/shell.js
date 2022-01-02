import { position } from "@/features/track/store";

let shellId = 0;
/**
 * @param {Object} param
 * @param {string|number} param.id
 * @param {Position=} param.pos
 * @param {string|Color} param.color
 * @param {Array.<MoveCard>=} param.moves
 * @return {Shell}
 */
export const shell = ({
  id = shellId++ + "-shell",
  pos = position(),
  color,
  moves = [],
}) => ({
  color,
  id,
  isShell: true,
  moves,
  on: {
    collision: [
      buildRemoveMoveCard(2),
      { action: "add", property: "crashed", value: true },
      { action: "remove", property: "bodies", target: "world", value: id },
    ],
  },
  pos,
});
