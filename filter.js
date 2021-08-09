export const filterPies = (array, instructor) => {
  return array.filter((pieObject) => pieObject.instructor === instructor);
};
