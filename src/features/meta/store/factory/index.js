export const buildAddMoveCard = (value) => ({
  action: "add",
  property: "moves",
  value,
});
export const buildRemoveMoveCard = (value) => ({
  action: "remove",
  property: "moves",
  value,
});
