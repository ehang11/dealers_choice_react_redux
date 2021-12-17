const express = require("express");
const app = express();
const path = require("path");
const faker = require("faker");

const {
  syncAndSeed,
  models: { NFT, Artist },
} = require("./db");

//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use("/dist", express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "src", "index.html"))
);

//Get NFT, Get NFT by ID
app.get("/nft", async (req, res, next) => {
  try {
    const nft = await NFT.findAll({
      include: [Artist],
    });
    res.send(nft);
  } catch (error) {
    next(error);
  }
});
app.get("/nft/:id", async (req, res, next) => {
  try {
    res.send(
      await NFT.findOne({
        where: {
          id: req.params.id,
        },
      })
    );
  } catch (ex) {
    next(ex);
  }
});

//Get Artist, Get Artist by ID
app.get("/artist", async (req, res, next) => {
  try {
    res.send(
      await Artist.findAll({
        include: [NFT],
      })
    );
  } catch (error) {
    next(error);
  }
});

app.get("/artist/:id", async (req, res, next) => {
  try {
    res.send(
      await Artist.findByPk(req.params.id, {
        include: [NFT],
      })
    );
  } catch (error) {
    next(error);
  }
});

//POST
app.post("/nft/create", async (req, res, next) => {
  try {
    res.send(
      await NFT.create({
        name: faker.name.word(),
        imgURL: faker.image.abstract(),
        author: faker.image.avatar(),
        price: Math.random(),
      })
    );
  } catch (error) {
    next(error);
  }
});

//DELETE
app.delete("/nft/:id"),
  async (req, res, next) => {
    try {
      const nft = await NFT.findByPk(req.params.id);
      await nft.destroy();
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };

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
