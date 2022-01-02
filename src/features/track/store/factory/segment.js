import { position } from "@/features/track/store/factory/position";

let segId = 0;
/**
 * @param {Object} param
 * @param {string=} param.id
 * @param {string} param.color
 * @param {object} param.qual
 * @param {Position} param.pos
 *
 * @returns {Segment}
 *
 * @example
 * segment(0, "red", { 0: -1, 0.5: 0, 1: 1 });
 */
export const segment = ({
  id = segId++ + "-seg",
  color,
  qual,
  pos = position(),
}) => ({
  color,
  id,
  pos,
  qual,
});
