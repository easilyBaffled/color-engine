import color from "color";
let moveId = 0;
/**
 *
 * @param {Object|Color} param
 * @param {string=} param.id
 * @param {string} param.color
 * @return {MoveCard}
 */
export const moveCard = ({ id = moveId++ + "-move", color }) => ({ color, id });

moveCard.avg = () =>
  moveCard({ color: color([127.5, 127.5, 127.5]).rgb().string() });
