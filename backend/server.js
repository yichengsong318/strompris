const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const cors = require("cors");
const app = express();
const axios = require("axios");

app.use(cors());
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.get("/api", async function (req, res) {
  let country = req.query.country;
  console.log(country, "country");
  const data = await axios
    .get(
      `https://www.strompris.no/rest/products/get/municipality/${country}?v=master_48`
    )
    .then((data) => data.data)
    .catch((err) => next(err));
  console.log(data);
  // res.set("Content-Type", "application/json");
  res.status(200).json({ data: data });
});

app.post("/country", async function (req, res) {
  const data = await axios
    .get(" https://www.strompris.no/rest/municipalities")
    .then((data) => data.data)
    .catch((err) => next(err));
  console.log(data);
  // res.set("Content-Type", "application/json");
  res.status(200).json({ data: data });
});

app.post("/week", async function (req, res) {
  const weekdata = await axios
    .get("https://www.strompris.no/feeds/week.csv", {
      auth: {
        username: "feeduser",
        password: "consumer", // Bad password
      },
    })
    .then((data) => data.data)
    .catch((err) => next(err));
  const weekdataformat = weekdata
    .split("\n")
    .map((element) => element.split(";"));
  const keys = weekdataformat[0];
  weekdataformat.shift();
  var resultData = [];
  weekdataformat.forEach((value) => {
    let result = {};
    keys.forEach((key, i) => {
      result[key] = value[i];
    });
    resultData.push(result);
  });
  console.log(resultData.length);
  // res.set("Content-Type", "application/json");
  res.status(200).json({ data: resultData });
});

app.listen(port, () => {
  console.log(`express server listening on port ${port}!`);
});
