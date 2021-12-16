import * as fs from "fs";

fs.readFile("./day-01/input.txt", (err, data) => {
  if (err) throw err;

  const lines = data.toString().replace(/\r\n/g, '\n').split('\n')
  let previousSum: number = -1;
  let depthIncreases: number = 0;

  lines.forEach((_, windowStart) => {
    if (windowStart + 2 >= lines.length) return; // If cannot form a window
    if (windowStart === 0) return; // If at the start, no previous sum

    if (parseInt(lines[windowStart + 2]) > parseInt(lines[windowStart - 1])) depthIncreases++;
  })
  console.log(`depth increased ${depthIncreases} times`)
})
