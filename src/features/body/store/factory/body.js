import { position } from "@/features/track/store";

let bodyId = 0;

/**
 *
 * @param {Object} param
 * @param {string=} param.id
 * @param {string} param.color
 * @param {MoveCard[]} param.moves
 * @param {Position=} param.pos
 *
 * @returns {Body}
 */
export const body = ({
  id = bodyId++ + "-body",
  pos = position(),
  color,
  moves = [],
}) => ({
  boost: false,
  color,
  id,
  moves,
  pos,
  shield: 0,
});
