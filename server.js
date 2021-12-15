const express = require("express");
const app = express();
const path = require("path");
const {
  syncAndSeed,
  models: { NFT, Artist },
} = require("./db");

app.use("/dist", express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "src", "index.html"))
);

const init = async () => {
  try {
    await syncAndSeed();
    const PORT = 8000;
    app.listen(PORT, () =>
      console.log(`
          LISTENING ON PORT ${PORT}
  
          http://localhost:${PORT}/
          `)
    );
  } catch (error) {
    console.log(error);
  }
};

init();
