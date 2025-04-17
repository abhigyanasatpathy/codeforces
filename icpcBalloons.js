"use strict";

const t = parseInt(readline()); 

for (let i = 0; i < t; i++) {
    const n = parseInt(readline()); 
    const s = readline(); 

    let solved = new Set();
    let balloons = 0;

    for (let ch of s) {
        if (!solved.has(ch)) {
            balloons += 2;
            solved.add(ch);
        } else {
            balloons += 1;
        }
    }

    print(balloons);
}
