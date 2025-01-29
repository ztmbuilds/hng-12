const app = require("express")();
app.use(require("cors")());

app.get("/", (req, res) => {
  res.status(200).json({
    email: "s.zetro007@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/ztmbuilds/hng-12",
  });
});

app.listen(3000, async () => {
  console.log("Listening on port 3000");
});
