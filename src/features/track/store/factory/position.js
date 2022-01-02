/**
 *
 * @param {({ val: number }|number)} param
 *
 * @returns {Position}
 */
export const position = (val = 0) => {
  if (typeof val === "number") return { val };
  else return val;
};
