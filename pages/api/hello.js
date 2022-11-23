// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const R = require("r-script");

export default function handler(req, res) {
  const out = R("pages/api/test.r")
    .data("GabeLanceShay", 9999)
    .callSync()
  res.send(out);
}
