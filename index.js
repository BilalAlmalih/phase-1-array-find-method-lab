const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" },
  //...
];
function superbowlWin(objects) {
  const winObject = objects.find((obj) => obj.result === "W");
  return winObject ? winObject.year : undefined;
}

const winYear = superbowlWin(record);
console.log(winYear);
