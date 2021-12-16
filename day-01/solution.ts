import * as fs from "fs";

fs.readFile("./day-01/input.txt", (err, data) => {
  if (err) throw err;

  const lines = data.toString().replace(/\r\n/g, '\n').split('\n')
  let lastDepth: number | null = null;
  let depthIncreases: number = 0;
  console.log(lines.length);

  for (let line of lines) {
    const depth = parseInt(line);
    if (lastDepth !== null) {
      if (depth > lastDepth) depthIncreases++;
    }
    lastDepth = depth;
  }
  console.log(`depth increased ${depthIncreases} times`)
})

