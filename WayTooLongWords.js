"use strict";

const t = parseInt(readline()); 
for (let i = 0; i < t; i++) {
    const word = readline(); 
    if (word.length <= 10) {
        print(word); 
    } else {
        const abbreviated = word[0] + (word.length - 2) + word[word.length - 1];
        print(abbreviated);
    }
}
