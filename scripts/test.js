const R = require("r-script");

const out = R("test.r")
    .data("hello world", 20)
    .callSync();

console.log(out);