const faker = require("faker");
const Sequelize = require("sequelize");
const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/dealers_choice_react"
);

const { STRING, ENUM, FLOAT } = Sequelize.DataTypes;

//Define: NFT
const NFT = conn.define("NFTs", {
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
    //defaultValue: faker.lorem.wo,
  },
  imgURL: {
    type: STRING,
    //defaultValue:
  },

  author: {
    type: STRING,
    allowNull: false,
  },
  //Price: in ETH
  price: {
    type: FLOAT,
    allowNull: false,
    //defaultValue:
  },
});
//Define: Artist
const Artist = conn.define("artists", {
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
    //defaultValue:
  },
  imgURL: {
    type: STRING,
    //defaultValue:
  },
});

//Associations
NFT.belongsTo(Artist);
Artist.hasMany(NFT);

const syncAndSeed = async () => {
  try {
    await conn.sync({ force: true });
    //Hardcoded data for Popular NFT Artist: (CryptoPunks, Bored Ape Yacht Club, SuperRare)
    const CryptoPunks = await Artist.create({
      name: "CryptoPunks",
      imgURL:
        "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s0",
    });
    const Bored_Ape_Yacht_Club = await Artist.create({
      name: "Bored Ape Yacht Club",
      imgURL:
        "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s0",
    });
    const SuperRare = await Artist.create({
      name: "SuperRare",
      imgURL:
        "https://lh3.googleusercontent.com/-1VbTF_qOdwTUTxW8KzJbFcMX0-mDF-BJM-gmmRl8ihvoo53PF_1z1m1snLXxwcxVFyJH7wk_kouq-KVyB55N9U=s0",
    });

    const CloneX = await Artist.create({
      name: "Clone X",
      imgURL:
        "https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s130",
    });

    const Automeka = await Artist.create({
      name: "Automeka",
      imgURL:
        "https://lh3.googleusercontent.com/6CS0frnjPEpvJ8hE3OG6_TbJFEC5YYThnZMdLTTmW-Z91lyYAJkPA7-ou2uE-b_J-cBUBeqWkI4HYKHEiu2PAyCT6wkYKzoeCyuy=s130",
    });
    // const CryptoPunks = await Artist.create({
    //   name: "",
    //   imgURL: "",
    // });

    //Hardcoded data for Popular NFTs
    const CloneX_13692 = await NFT.create({
      name: "CloneX #13692",
      imgURL:
        "https://lh3.googleusercontent.com/ojcTmd7Mjdk09vZrKC7KvmL0dVZUwVAAO_mR9dZOeQP68KaOqDaetKoLkTC-NFFYLsJy54qLNZdWzZ_ETQFeffK7fRF6uV1eIUQHIQ=w600",
      author: CloneX.imgURL,
      price: 20,
    });

    const CryptoPunks_7804 = await NFT.create({
      name: "CryptoPunk #7804",
      imgURL:
        "https://lh3.googleusercontent.com/KPQPI9GRwIMPHK5XEgwgH6ATGR4Jxgb2ogyDprxe7H92xv7BubohOQgEP8UN9F5CueXyhxgKCI4Ytb5fP8ww75mE=w600",

      author: CryptoPunks.imgURL,
      price: 4200,
    });
    const Bored_Ape_Yacht_Club_2087 = await NFT.create({
      name: "2087",
      imgURL:
        "https://lh3.googleusercontent.com/EHGOqL4UpxmnvlN6oZoi68uWV6cVi2SpeKydnTcEXKv7qlyHyVNdqtWW8HqZmS394g7pgWFx_qA6HEOhg_ha1f6k90MVQu_3TF4pqQ=w600",

      author: Bored_Ape_Yacht_Club.imgURL,
      price: 89.15,
    });
    const Bored_Ape_Yacht_Club_3749 = await NFT.create({
      name: "3749",
      imgURL:
        "https://lh3.googleusercontent.com/grHHS7VLjgmEDagQ7nBar0sFHb0c-BP7v_w_R8aJVpaMrCzk-Yd_CCp3cO9PFlzuDBc_NPLyaZwJpS_Fvz-mHPdl2hs4ukP0e334vw=w600",

      author: Bored_Ape_Yacht_Club.imgURL,
      price: 11.18,
    });
    const SuperRare_A_Coin_for_the_Ferryman = await NFT.create({
      name: "A Coin for the Ferryman",
      imgURL:
        "https://lh3.googleusercontent.com/20a2jM3_rkyZpWa6P1pe9zbBsw-a6yPc6ZeMUK_-uEi_lrQk6PKI3E6cRicgyiLRBeBaEhOhrrGfb1CwvnMtumY=w600",

      author: SuperRare.imgURL,
      price: 1330,
    });

    const CloneX_13784 = await NFT.create({
      name: "CloneX #13784",
      imgURL:
        "https://lh3.googleusercontent.com/oZBv-8MB2M8aVinUrnGIbBElet1V11yXlF_1INXndEk-f-YQn4MemcERhjmrgMxDCkFyGv55HN3rCuOAwpSMxhMPVQ6NlWeeprj7=w600",
      author: CloneX.imgURL,
      price: 3.7,
    });

    const SuperRare_All_Time_High_in_the_City = await NFT.create({
      name: "All Time High in the City",
      imgURL:
        "https://lh3.googleusercontent.com/kVXc9_maaBNRhm_N0rFKk3TePsErgI83EqKD9NldgG-ayCFZIdDMAfHqjRHiJiV0IzvNzcH5v3Is8gV4RzAwKHNN=w600",

      author: SuperRare.imgURL,
      price: 1000,
    });

    const CryptoPunks_9998 = await NFT.create({
      name: "CryptoPunk #9998",
      imgURL:
        "https://lh3.googleusercontent.com/O0TPreCr-fnuhYTUGwHPfp3gZgqwAogRrdmkm60Aiozg9kTuyMeIKc_A0I_yBNIJfoISRuGllSHsatOjxxMWHMMxMOhMbpOJ43wM8A=w600",

      author: CryptoPunks.imgURL,
      price: 124457.06,
    });

    const Automeka_Airdrop1 = await NFT.create({
      name: "Automeka Airdrop",
      imgURL:
        "https://lh3.googleusercontent.com/C8wVNQbKAvPZeFW9kJupupE_FY1amttGpY4-KGNVn7OCeRjBFEs8aXHMxqmYK_KmbD6Y1xSkk6P_27WM2aw2LuMk-l_6oME98-ysTA=w600",
      author: Automeka.imgURL,
      price: 0.0005,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  syncAndSeed,
  models: { NFT, Artist },
};
