const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: "kwy120",
      image: "https://picsum.photos/64/64",
      name: "김우영",
      birthday: "920120",
      gender: "남자",
      job: "회사원",
    },
    {
      id: "skyelly96",
      image: "https://picsum.photos/64/64",
      name: "권민아",
      birthday: "990102",
      gender: "여자",
      job: "비서",
    },
    {
      id: "tonabii",
      image: "https://picsum.photos/64/64",
      name: "지성온",
      birthday: "961212",
      gender: "남자",
      job: "대학생",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
