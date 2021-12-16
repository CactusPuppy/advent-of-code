"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
fs.readFile("./day-01/input.txt", (err, data) => {
    if (err)
        throw err;
    const lines = data.toString().replace(/\r\n/g, '\n').split('\n');
    let lastDepth = null;
    let depthIncreases = 0;
    console.log(lines.length);
    for (let line of lines) {
        if (lastDepth === null)
            continue;
        const depth = parseInt(line);
        if (depth > lastDepth)
            depthIncreases++;
        lastDepth = depth;
    }
    console.log(`depth increased ${depthIncreases} times`);
});
